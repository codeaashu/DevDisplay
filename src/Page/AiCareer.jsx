import React, { useState, useEffect, useRef } from 'react';
import {
  Brain,
  Target,
  Code,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Clock,
  BookOpen,
  Building2,
  Rocket,
  ArrowRight,
  Loader2,
  Sparkles,
  Star,
  Users,
  Award,
  Github,
  Linkedin,
  X,
  User,
  GraduationCap,
  Heart,
  ArrowLeft,
  Compass,
  Trophy,
  Lightbulb,
  MessageCircle,
  Send,
  Minimize2,
  Maximize2,
  Bot,
  Copy,
  DollarSign,
} from 'lucide-react';

// Enhanced Chatbot Component with Gemini Integration
const Chatbot = ({ assessmentData, userProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content:
        "Hi! I'm your AI Career Assistant powered by Gemini. I can help you with career guidance, job search tips, skill recommendations, and answer questions about your career path. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_GEMINI_API_KEY || '');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle user typing indicator
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    setIsUserTyping(true);

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set timeout to hide typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      setIsUserTyping(false);
    }, 1000);
  };

  // Enhanced Gemini API integration
  const callGeminiAPI = async (message, context = '') => {
    if (!apiKey) {
      throw new Error('Gemini API key is not configured. Please add your API key to environment variables.');
    }

    const careerContext = assessmentData
      ? `
User Profile Context:
- Education: ${assessmentData.education?.currentStatus}
- Field of Study: ${assessmentData.education?.fieldOfStudy}
- Technical Skills: ${assessmentData.skills?.technicalSkills?.join(', ')}
- Soft Skills: ${assessmentData.skills?.softSkills?.join(', ')}
- Career Goal: ${assessmentData.career?.primaryGoal}
- Work Preference: ${assessmentData.personal?.workPreference}
- Interests: ${assessmentData.interests?.industries?.join(', ')}
`
      : '';

    const systemPrompt = `You are an expert AI Career Advisor assistant. Your role is to provide personalized, actionable career guidance. 

${careerContext}

Guidelines:
1. Provide specific, actionable advice
2. Reference current industry trends and market demands
3. Suggest concrete next steps and resources
4. Be encouraging and supportive
5. Use the user's profile context when available
6. Keep responses concise but comprehensive (2-4 paragraphs max)
7. Include relevant examples when helpful
8. Focus on career development, job searching, skills, interviews, salary negotiation, and professional growth

User Question: ${message}

Provide a helpful, personalized response:`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: systemPrompt,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
            safetySettings: [
              {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
              {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
              {
                category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
              {
                category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
              },
            ],
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from Gemini API');
      }

      const data = await response.json();

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
    }
  };

  // Enhanced fallback responses
  const getFallbackResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('salary') || lowerMessage.includes('pay') || lowerMessage.includes('compensation')) {
      return `💰 **Salary Guidance**\n\nSalary ranges vary by role, location, and experience. Here's what I suggest:\n\n• **Research**: Use Glassdoor, PayScale, and LinkedIn Salary Insights\n• **Entry-level tech**: $60-80k typically\n• **Mid-level**: $80-120k range\n• **Senior roles**: $120k+ depending on specialization\n\n**Pro tip**: Factor in total compensation including benefits, equity, and work-life balance. Would you like specific advice for your target role?`;
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('learn') || lowerMessage.includes('technology')) {
      return `🚀 **Skill Development Strategy**\n\nBased on current market trends, focus on:\n\n**High-demand technical skills:**\n• JavaScript/TypeScript, Python, React\n• Cloud platforms (AWS, Azure, GCP)\n• AI/ML fundamentals\n• DevOps and containerization\n\n**Essential soft skills:**\n• Communication and leadership\n• Problem-solving and critical thinking\n• Adaptability and continuous learning\n\nWhat specific area interests you most? I can create a detailed learning roadmap!`;
    }

    if (lowerMessage.includes('interview') || lowerMessage.includes('preparation')) {
      return `🎯 **Interview Success Strategy**\n\n**Technical Preparation:**\n• Practice coding challenges (LeetCode, HackerRank)\n• Review system design basics\n• Prepare for role-specific questions\n\n**Behavioral Questions:**\n• Use the STAR method (Situation, Task, Action, Result)\n• Prepare 5-7 strong examples\n• Practice out loud\n\n**Day of Interview:**\n• Ask thoughtful questions about the role/company\n• Show enthusiasm and cultural fit\n• Follow up within 24 hours\n\nNeed help with specific interview types or questions?`;
    }

    if (lowerMessage.includes('career change') || lowerMessage.includes('transition')) {
      return `🔄 **Career Transition Roadmap**\n\n**Phase 1: Foundation**\n• Identify transferable skills\n• Research target industry thoroughly\n• Start building relevant skills\n\n**Phase 2: Build Credibility**\n• Create portfolio projects\n• Get relevant certifications\n• Network with industry professionals\n\n**Phase 3: Make the Move**\n• Apply strategically\n• Consider contract/freelance work initially\n• Leverage your unique background\n\nTransitions take 6-18 months typically. What field are you considering?`;
    }

    return `I'm here to help with your career journey! While I'm currently offline, I can still assist with:\n\n• **Career planning** and goal setting\n• **Skill development** recommendations\n• **Job search** strategies\n• **Interview preparation** tips\n• **Salary negotiation** guidance\n• **Network building** advice\n\nFor the most personalized guidance, try taking our comprehensive career assessment. What specific area would you like to explore?`;
  };

  // Enhanced message handling with Gemini API
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsUserTyping(false);
    setIsTyping(true);
    setError(null);

    try {
      // Call Gemini API
      const aiResponse = await callGeminiAPI(userMessage.content);

      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);

      // Fallback to predefined responses if API fails
      const fallbackResponse = getFallbackResponse(userMessage.content);

      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: fallbackResponse,
        timestamp: new Date(),
        isError: true,
      };

      setMessages((prev) => [...prev, botResponse]);
      setError('Using offline responses. For best experience, please check your internet connection.');
    } finally {
      setIsTyping(false);
    }
  };

  // Enhanced quick actions based on user context
  const getContextualQuickActions = () => {
    const baseActions = [
      'What skills should I learn next?',
      'Help me prepare for interviews',
      'Career change advice needed',
      'Salary negotiation tips',
      'How to build a strong portfolio?',
    ];

    if (assessmentData) {
      const personalizedActions = [
        `Roadmap for ${assessmentData.career?.primaryGoal || 'my career goal'}`,
        `Best practices for ${assessmentData.interests?.industries?.[0] || 'my industry'}`,
        'Next steps based on my assessment',
      ];
      return personalizedActions.concat(baseActions.slice(0, 3));
    }

    return baseActions;
  };

  const quickActions = getContextualQuickActions();

  const handleQuickAction = (action) => {
    setInputMessage(action);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const copyMessage = (content) => {
    navigator.clipboard.writeText(content);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
          <div className="absolute -left-2 -top-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {messages.length > 1 ? '!' : '1'}
          </div>
          {error && (
            <div className="absolute -top-10 right-0 rounded bg-yellow-500 px-2 py-1 text-xs text-white">
              Offline Mode
            </div>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`rounded-2xl border border-gray-700 bg-gray-800 shadow-2xl transition-all duration-300 ${
          isMinimized ? 'h-16 w-80' : 'h-[600px] w-96'
        }`}
      >
        {/* Enhanced Chat Header */}
        <div className="flex items-center justify-between rounded-t-2xl border-b border-gray-700 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="h-8 w-8 text-purple-400" />
              <div
                className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${
                  error ? 'bg-yellow-400' : 'bg-green-400'
                } animate-pulse`}
              />
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-white">
                AI Career Assistant
                <Sparkles className="h-4 w-4 text-purple-400" />
              </h3>
              <p className="text-xs text-gray-400">{error ? 'Offline Mode' : 'Powered by Gemini • Online'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 transition-colors hover:text-white"
              title={isMinimized ? 'Maximize' : 'Minimize'}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 transition-colors hover:text-white"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Error Banner */}
            {error && (
              <div className="border-b border-yellow-500/20 bg-yellow-500/10 p-2">
                <div className="flex items-center gap-2 text-xs text-yellow-300">
                  <AlertCircle className="h-3 w-3" />
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Enhanced Messages Area */}
            <div className="custom-scrollbar h-80 flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`group relative max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`relative rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : message.isError
                            ? 'border border-yellow-500/20 bg-yellow-500/10 text-yellow-300'
                            : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {/* Message content with markdown-like formatting */}
                      <div className="whitespace-pre-wrap text-sm">
                        {message.content.split('\n').map((line, index) => {
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return (
                              <div key={index} className="mb-2 font-bold text-white">
                                {line.slice(2, -2)}
                              </div>
                            );
                          }
                          if (line.startsWith('• ')) {
                            return (
                              <div key={index} className="mb-1 ml-2">
                                {line}
                              </div>
                            );
                          }
                          return (
                            line && (
                              <div key={index} className="mb-1">
                                {line}
                              </div>
                            )
                          );
                        })}
                      </div>

                      {/* Message actions */}
                      {message.type === 'bot' && (
                        <button
                          onClick={() => copyMessage(message.content)}
                          className="absolute right-2 top-2 text-gray-400 opacity-0 transition-opacity hover:text-white group-hover:opacity-100"
                          title="Copy message"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      )}
                    </div>

                    <div className={`mt-1 text-xs opacity-70 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Enhanced typing indicators */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-2xl bg-gray-700 px-4 py-3 text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Bot className="h-4 w-4 text-purple-400" />
                      <span className="mr-2 text-xs">AI is thinking</span>
                      <div className="flex space-x-1">
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-purple-400"
                          style={{ animationDelay: '0ms' }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-purple-400"
                          style={{ animationDelay: '150ms' }}
                        />
                        <div
                          className="h-2 w-2 animate-bounce rounded-full bg-purple-400"
                          style={{ animationDelay: '300ms' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isUserTyping && (
                <div className="flex justify-end">
                  <div className="text-xs italic text-gray-400">You are typing...</div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Quick Actions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="mb-2 text-xs text-gray-400">✨ Try asking about:</p>
                <div className="flex flex-wrap gap-1">
                  {quickActions.slice(0, 3).map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="rounded-full border border-gray-600 bg-gray-700 px-3 py-1.5 text-xs text-gray-300 transition-all duration-200 hover:border-purple-500 hover:bg-purple-600 hover:text-white"
                    >
                      {action.length > 25 ? action.substring(0, 25) + '...' : action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Input Area */}
            <div className="border-t border-gray-700 p-4">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <textarea
                    ref={inputRef}
                    value={inputMessage}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask me anything about your career..."
                    className="max-h-24 w-full resize-none rounded-xl border border-gray-600 bg-gray-700 px-4 py-3 text-sm text-white transition-all duration-200 focus:border-purple-500 focus:outline-none"
                    disabled={isTyping}
                    rows={1}
                    style={{
                      minHeight: '44px',
                      height: 'auto',
                    }}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = Math.min(e.target.scrollHeight, 96) + 'px';
                    }}
                  />
                  {inputMessage.length > 0 && (
                    <div className="mt-1 text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</div>
                  )}
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="flex-shrink-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-3 text-white transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  title="Send message"
                >
                  {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.7);
        }
      `}</style>
    </div>
  );
};

// Add environment variable check component
const APIKeyCheck = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!process.env.REACT_APP_GEMINI_API_KEY) {
      setShowWarning(true);
    }
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed left-1/2 top-4 z-50 max-w-md -translate-x-1/2 transform rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3">
      <div className="flex items-center gap-2 text-sm text-yellow-300">
        <AlertCircle className="h-4 w-4" />
        <span>Add REACT_APP_GEMINI_API_KEY to .env file for full AI features</span>
        <button onClick={() => setShowWarning(false)} className="ml-auto">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Floating Background Orb Component
const FloatingOrb = ({ className, delay = 0 }) => (
  <div
    className={`animate-float absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: '8s',
    }}
  />
);

// Enhanced Button Component
const GlowButton = ({ children, onClick, disabled, className = '', variant = 'primary', size = 'md' }) => {
  const baseClasses =
    'relative font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-8 py-4 rounded-xl',
    lg: 'px-12 py-6 text-xl rounded-2xl',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-purple-500 hover:to-pink-500',
    secondary:
      'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg shadow-gray-700/25 hover:shadow-gray-700/40',
    outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent',
    success:
      'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className} ${disabled ? 'transform-none cursor-not-allowed opacity-50' : ''}`}
    >
      {children}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </button>
  );
};

// Section Navigation Component for Assessment
const SectionNavigation = ({ sections, currentSection, currentQuestion, questions, answers }) => {
  return (
    <div className="mb-8">
      <div className="mb-4 flex justify-center">
        <div className="rounded-2xl border border-gray-700/50 bg-gray-800/50 p-4 backdrop-blur-xl">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section, idx) => {
              const sectionQuestions = questions.filter((q) => q.section === section.id);
              const isActive = currentSection.id === section.id;
              const isCompleted = sectionQuestions.every((q) => {
                const questionIndex = questions.findIndex((quest) => quest.id === q.id);
                const answer = answers[questionIndex];
                if (!answer) return false;
                if (q.type === 'text') return answer.trim().length >= 10;
                if (q.isMultiSelect) return Array.isArray(answer) && answer.length > 0;
                return true;
              });

              return (
                <div
                  key={section.id}
                  className={`flex flex-col items-center rounded-xl px-4 py-3 transition-all ${
                    isActive ? 'border border-purple-500/30 bg-purple-600/20' : 'border border-transparent'
                  }`}
                >
                  <div
                    className={`flex flex-col items-center gap-2 ${
                      isActive ? 'text-purple-400' : isCompleted ? 'text-green-400' : 'text-gray-400'
                    }`}
                  >
                    <section.icon className="h-6 w-6" />
                    <span className="text-center text-xs font-medium">{section.title}</span>
                  </div>
                  <div className="mt-2 h-1 w-12 rounded-full bg-gray-700">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isCompleted ? 'bg-green-500' : isActive ? 'bg-purple-600' : 'bg-gray-600'
                      }`}
                      style={{
                        width: isCompleted
                          ? '100%'
                          : isActive
                            ? `${((currentQuestion - questions.findIndex((q) => q.section === section.id) + 1) / sectionQuestions.length) * 100}%`
                            : '0%',
                      }}
                    />
                  </div>
                  {isCompleted && <CheckCircle2 className="mt-1 h-4 w-4 text-green-400" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center">
        <span className="text-sm text-gray-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>
    </div>
  );
};

// Question Card Component
const QuestionCard = ({ question, answer, onAnswer, validationError }) => {
  const renderScale = () => (
    <div className="space-y-6">
      <div className="flex justify-between text-sm text-gray-400">
        <span>{question.labels[0]}</span>
        <span>{question.labels[1]}</span>
      </div>
      <div className="flex justify-between gap-3">
        {question.options.map((option) => (
          <GlowButton
            key={option}
            variant={answer === option ? 'primary' : 'outline'}
            onClick={() => onAnswer(option)}
            className="h-16 w-full text-lg font-bold"
          >
            {option}
          </GlowButton>
        ))}
      </div>
      <div className="text-center text-sm text-gray-400">
        Rate from {question.options[0]} to {question.options[question.options.length - 1]}
      </div>
    </div>
  );

  const renderMultiple = () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => {
            if (question.isMultiSelect) {
              const currentAnswers = answer || [];
              const newAnswers = currentAnswers.includes(option)
                ? currentAnswers.filter((a) => a !== option)
                : [...currentAnswers, option];
              onAnswer(newAnswers);
            } else {
              onAnswer(option);
            }
          }}
          className={`group relative rounded-xl border-2 p-4 text-left transition-all duration-200 ${
            question.isMultiSelect
              ? answer?.includes(option)
                ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-400 hover:bg-gray-700/70'
              : answer === option
                ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-400 hover:bg-gray-700/70'
          }`}
        >
          <span className="relative z-10">{option}</span>
          {question.isMultiSelect && answer?.includes(option) && (
            <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 text-purple-400" />
          )}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
      ))}
      {question.isMultiSelect && (
        <div className="col-span-full mt-2 text-sm text-gray-400">Select multiple options that apply to you</div>
      )}
    </div>
  );

  const renderTextInput = () => (
    <div className="space-y-4">
      <textarea
        value={answer || ''}
        onChange={(e) => onAnswer(e.target.value)}
        placeholder={question.placeholder}
        className="h-40 w-full resize-none rounded-xl border border-gray-600/50 bg-gray-700/50 px-6 py-4 text-white placeholder-gray-400 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
      />
      <div className="flex justify-between text-sm">
        <span className={`${(answer || '').length < 10 ? 'text-red-400' : 'text-green-400'}`}>
          Minimum 10 characters required
        </span>
        <span className="text-gray-400">{(answer || '').length} characters</span>
      </div>
    </div>
  );

  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl" />
      <div className="relative rounded-3xl border border-gray-700/50 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
            <span className="font-bold text-white">{question.id}</span>
          </div>
          <h3 className="flex-1 text-2xl font-bold text-white">{question.question}</h3>
        </div>

        {validationError && (
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" />
            {validationError}
          </div>
        )}

        {question.type === 'text' && renderTextInput()}
        {question.type === 'scale' && renderScale()}
        {question.type === 'multiple' && renderMultiple()}
      </div>
    </div>
  );
};

// Assessment Component
const Assessment = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Section definitions
  const sections = [
    { id: 'education', title: 'Education', icon: GraduationCap },
    { id: 'skills', title: 'Skills', icon: Brain },
    { id: 'interests', title: 'Interests', icon: Heart },
    { id: 'personal', title: 'Personal', icon: User },
    { id: 'career', title: 'Career', icon: Target },
  ];

  // All questions
  const questions = [
    {
      id: 1,
      section: 'education',
      type: 'multiple',
      question: 'What is your current educational status?',
      options: [
        'High School Student',
        'High School Graduate',
        'College Student',
        'College Graduate',
        'Postgraduate',
        'Working Professional',
        'Self-Taught',
      ],
    },
    {
      id: 2,
      section: 'education',
      type: 'multiple',
      question: 'What field of study are you most interested in or have studied?',
      options: [
        'Computer Science/IT',
        'Engineering',
        'Business/Management',
        'Arts/Humanities',
        'Sciences',
        'Mathematics',
        'Healthcare',
        'Social Sciences',
        'Other',
      ],
    },
    {
      id: 3,
      section: 'education',
      type: 'scale',
      question: 'How would you rate your overall academic performance?',
      options: [1, 2, 3, 4, 5],
      labels: ['Below Average', 'Excellent'],
    },
    {
      id: 4,
      section: 'skills',
      type: 'multiple',
      isMultiSelect: true,
      question: 'Select your strongest technical skills:',
      options: [
        'Programming/Coding',
        'Web Development',
        'Data Analysis',
        'Digital Marketing',
        'Graphic Design',
        'Project Management',
        'Database Management',
        'Cybersecurity',
        'AI/Machine Learning',
        'Mobile App Development',
        'Cloud Computing',
        'DevOps',
      ],
    },
    {
      id: 5,
      section: 'skills',
      type: 'multiple',
      isMultiSelect: true,
      question: 'Select your strongest soft skills:',
      options: [
        'Communication',
        'Leadership',
        'Problem Solving',
        'Team Work',
        'Time Management',
        'Creativity',
        'Critical Thinking',
        'Adaptability',
        'Public Speaking',
        'Negotiation',
      ],
    },
    {
      id: 6,
      section: 'skills',
      type: 'scale',
      question: 'How comfortable are you with learning new technologies?',
      options: [1, 2, 3, 4, 5],
      labels: ['Not Comfortable', 'Very Comfortable'],
    },
    {
      id: 7,
      section: 'interests',
      type: 'multiple',
      isMultiSelect: true,
      question: 'Which industries interest you most?',
      options: [
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Entertainment',
        'Automotive',
        'Retail',
        'Manufacturing',
        'Government',
        'Non-Profit',
        'Startups',
        'Consulting',
      ],
    },
    {
      id: 8,
      section: 'interests',
      type: 'multiple',
      question: 'What type of work environment do you prefer?',
      options: [
        'Startup Culture',
        'Large Corporation',
        'Remote Work',
        'Hybrid Work',
        'Traditional Office',
        'Government Sector',
        'Freelancing',
        'Small Business',
      ],
    },
    {
      id: 9,
      section: 'interests',
      type: 'multiple',
      isMultiSelect: true,
      question: 'What motivates you most in work?',
      options: [
        'Problem Solving',
        'Creative Expression',
        'Helping Others',
        'Financial Rewards',
        'Recognition',
        'Work-Life Balance',
        'Learning & Growth',
        'Making Impact',
        'Independence',
      ],
    },
    {
      id: 10,
      section: 'personal',
      type: 'scale',
      question: 'How comfortable are you with leadership responsibilities?',
      options: [1, 2, 3, 4, 5],
      labels: ['Not Comfortable', 'Very Comfortable'],
    },
    {
      id: 11,
      section: 'personal',
      type: 'multiple',
      question: 'How do you prefer to work?',
      options: [
        'Independently',
        'In Small Teams',
        'In Large Teams',
        'Mix of Both',
        'Leading Teams',
        'Following Instructions',
      ],
    },
    {
      id: 12,
      section: 'personal',
      type: 'scale',
      question: 'How do you handle stress and pressure?',
      options: [1, 2, 3, 4, 5],
      labels: ['Poorly', 'Very Well'],
    },
    {
      id: 13,
      section: 'career',
      type: 'multiple',
      question: 'What is your primary career goal?',
      options: [
        'Technical Expertise',
        'Management/Leadership',
        'Entrepreneurship',
        'Consulting',
        'Research & Development',
        'Teaching/Training',
        'Creative Work',
        'Public Service',
      ],
    },
    {
      id: 14,
      section: 'career',
      type: 'multiple',
      isMultiSelect: true,
      question: 'What are your priorities for your next career move?',
      options: [
        'Higher Salary',
        'Better Work-Life Balance',
        'Career Growth',
        'New Challenges',
        'Company Culture',
        'Location',
        'Job Security',
        'Learning Opportunities',
      ],
    },
    {
      id: 15,
      section: 'career',
      type: 'text',
      question: 'Describe your ideal career path and where you see yourself in 5 years:',
      placeholder: 'Share your career aspirations, goals, and what success looks like to you...',
    },
  ];

  const getCurrentSection = () => {
    const currentQ = questions[currentQuestion];
    return sections.find((s) => s.id === currentQ.section);
  };

  const validateQuestion = (questionIndex) => {
    const question = questions[questionIndex];
    const answer = answers[questionIndex];

    if (!answer) return false;
    if (question.type === 'text') return answer.trim().length >= 10;
    if (question.isMultiSelect) return Array.isArray(answer) && answer.length > 0;
    return true;
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    setValidationErrors({ ...validationErrors, [currentQuestion]: null });
  };

  const handleNext = () => {
    if (validateQuestion(currentQuestion)) {
      setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1));
    } else {
      setValidationErrors({
        ...validationErrors,
        [currentQuestion]: 'Please provide an answer to continue',
      });
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(Math.max(0, currentQuestion - 1));
  };

  const handleSubmit = async () => {
    const invalidQuestions = questions.reduce((acc, _, index) => {
      if (!validateQuestion(index)) {
        acc[index] = 'This field is required';
      }
      return acc;
    }, {});

    if (Object.keys(invalidQuestions).length > 0) {
      setValidationErrors(invalidQuestions);
      setCurrentQuestion(Number(Object.keys(invalidQuestions)[0]));
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const assessmentData = {
        education: {
          currentStatus: answers[0],
          fieldOfStudy: answers[1],
          academicPerformance: answers[2],
        },
        skills: {
          technicalSkills: answers[3] || [],
          softSkills: answers[4] || [],
          learningComfort: answers[5],
        },
        interests: {
          industries: answers[6] || [],
          workEnvironment: answers[7],
          motivations: answers[8] || [],
        },
        personal: {
          leadershipComfort: answers[9],
          workPreference: answers[10],
          stressHandling: answers[11],
        },
        career: {
          primaryGoal: answers[12],
          priorities: answers[13] || [],
          careerVision: answers[14],
        },
        metadata: {
          completedAt: new Date().toISOString(),
          totalQuestions: questions.length,
        },
      };

      onComplete(assessmentData);
    } catch (error) {
      console.error('Assessment submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentSection = getCurrentSection();
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
        <FloatingOrb className="-left-32 top-10 h-64 w-64" delay={0} />
        <FloatingOrb className="right-10 top-1/3 h-48 w-48" delay={2} />
        <FloatingOrb className="bottom-20 left-1/4 h-32 w-32" delay={4} />
      </div>

      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
          <div className="space-y-4 rounded-2xl border border-gray-700/50 bg-gray-800/90 p-8 text-center backdrop-blur-xl">
            <div className="relative">
              <Loader2 className="mx-auto h-16 w-16 animate-spin text-purple-400" />
              <div className="absolute inset-0 animate-ping rounded-full bg-purple-400/20" />
            </div>
            <h3 className="text-xl font-semibold text-white">Processing Your Assessment</h3>
            <p className="text-gray-400">Analyzing your responses to create personalized recommendations...</p>
            <div className="mx-auto h-2 w-64 rounded-full bg-gray-700">
              <div
                className="h-2 animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                style={{ width: '70%' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Assessment Content */}
      <div className="relative z-10 pb-20 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <GlowButton variant="outline" size="sm" onClick={onBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </GlowButton>
              <div className="flex-1" />
              <div className="text-sm text-gray-400">Section: {currentSection.title}</div>
            </div>

            <Brain className="mx-auto mb-6 h-16 w-16 animate-pulse text-purple-400" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Career Assessment
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Help us understand your background, skills, and goals to create a personalized career roadmap.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm text-gray-400">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Section Navigation */}
          <SectionNavigation
            sections={sections}
            currentSection={currentSection}
            currentQuestion={currentQuestion}
            questions={questions}
            answers={answers}
          />

          {/* Question Card */}
          <QuestionCard
            question={questions[currentQuestion]}
            answer={answers[currentQuestion]}
            onAnswer={handleAnswer}
            validationError={validationErrors[currentQuestion]}
          />

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between">
            <GlowButton
              variant="secondary"
              onClick={handlePrevious}
              className={currentQuestion === 0 ? 'invisible' : ''}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Previous
            </GlowButton>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            {currentQuestion === questions.length - 1 ? (
              <GlowButton onClick={handleSubmit} disabled={isSubmitting} variant="success">
                <Sparkles className="mr-2 h-5 w-5" />
                Complete Assessment
              </GlowButton>
            ) : (
              <GlowButton onClick={handleNext}>
                Next
                <ArrowRight className="ml-2 h-5 w-5" />
              </GlowButton>
            )}
          </div>

          {/* Section Helper */}
          <div className="mt-8 rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-3">
              <currentSection.icon className="h-6 w-6 text-purple-400" />
              <h3 className="font-semibold text-purple-300">About this section</h3>
            </div>
            <p className="text-sm text-gray-400">
              {currentSection.id === 'education' && 'Tell us about your educational background and academic interests.'}
              {currentSection.id === 'skills' &&
                'Share your technical abilities and soft skills to help us understand your strengths.'}
              {currentSection.id === 'interests' &&
                "Your interests and motivations help us identify career paths you'll be passionate about."}
              {currentSection.id === 'personal' &&
                'Understanding your working style and preferences helps us recommend the right environment.'}
              {currentSection.id === 'career' &&
                'Your career goals and priorities help us create a personalized roadmap for success.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ title, skills, type, icon: Icon }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl transition-all duration-300 hover:border-purple-500/50">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative">
      <div className="mb-4 flex items-center">
        <Icon className={`mr-3 h-6 w-6 ${type === 'matched' ? 'text-green-400' : 'text-amber-400'}`} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span
          className={`ml-auto rounded-full px-3 py-1 text-xs font-medium ${
            type === 'matched' ? 'bg-green-400/20 text-green-300' : 'bg-amber-400/20 text-amber-300'
          }`}
        >
          {skills.length} skills
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
              type === 'matched'
                ? 'border border-green-400/30 bg-green-400/20 text-green-300'
                : 'border border-amber-400/30 bg-amber-400/20 text-amber-300'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProgressRing = ({ progress, size = 200, showPercentage = true }) => {
  const radius = (size - 20) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      <svg width={size} height={size} className="-rotate-90 transform">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progress-gradient)"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
              {progress}%
            </div>
            <div className="font-medium text-gray-400">Compatible</div>
          </div>
        </div>
      )}
    </div>
  );
};

const StepCard = ({ step, index, isActive }) => (
  <div
    className={`relative rounded-2xl p-6 transition-all duration-300 ${
      isActive
        ? 'border-purple-500/50 bg-gradient-to-r from-purple-600/20 to-pink-600/20 shadow-lg shadow-purple-500/20'
        : 'border-gray-700/50 bg-gray-800/50 hover:bg-gray-800/70'
    } border backdrop-blur-sm`}
  >
    <div className="flex items-start space-x-4">
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
          isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300'
        }`}
      >
        {index + 1}
      </div>
      <div className="flex-1">
        <div className="mb-2 flex items-center">
          <Clock className="mr-2 h-4 w-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">{step.timeframe}</span>
          {isActive && (
            <span className="ml-2 rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">Current</span>
          )}
        </div>
        <h4 className="mb-3 text-lg font-semibold text-white">{step.focus}</h4>
        <div className="space-y-2">
          {step.resources.map((resource, rIndex) => (
            <div key={rIndex} className="group flex items-center text-gray-300 transition-colors hover:text-white">
              <BookOpen className="mr-2 h-4 w-4 text-purple-400 group-hover:text-purple-300" />
              <span className="text-sm">{resource}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Main App Component with Enhanced Chatbot
function App() {
  const [currentView, setCurrentView] = useState('home');
  const [jobGoal, setJobGoal] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [targetCompany, setTargetCompany] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [assessmentData, setAssessmentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  // Enhanced analysis with assessment integration
  const enhancedAnalyzeCareerPath = (jobGoal, skillsList, targetCompany, assessmentData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let baseCompatibility = 75;

        if (assessmentData) {
          const { skills, career, personal } = assessmentData;

          if (skills.technicalSkills.length >= 3) baseCompatibility += 10;
          if (skills.learningComfort >= 4) baseCompatibility += 5;
          if (career.primaryGoal && jobGoal.toLowerCase().includes(career.primaryGoal.toLowerCase().split(' ')[0]))
            baseCompatibility += 8;
          if (personal.leadershipComfort >= 4 && jobGoal.toLowerCase().includes('lead')) baseCompatibility += 7;
        }

        resolve({
          compatibility: Math.min(95, baseCompatibility),
          matchedSkills: skillsList.slice(0, Math.min(6, skillsList.length)),
          missingSkills: [
            'Advanced TypeScript',
            'System Design',
            'Cloud Architecture',
            'DevOps',
            'Microservices',
            'API Design',
          ],
          assessmentInsights: assessmentData
            ? {
                personalityMatch: generatePersonalityInsight(assessmentData),
                learningPath: generateLearningPath(assessmentData),
                careerAlignment: generateCareerAlignment(assessmentData, jobGoal),
              }
            : null,
          companyInsights: {
            culture: `${targetCompany} values innovation, collaboration, and continuous learning`,
            techStack: ['React', 'TypeScript', 'Python', 'Kubernetes', 'AWS', 'GraphQL'],
            benefits: ['Competitive salary', 'Stock options', 'Learning budget', 'Flexible work'],
            challenges: ['Fast-paced environment', 'Complex technical problems', 'Scale challenges'],
          },
          careerPathSteps: [
            {
              timeframe: '1-2 months',
              focus: 'Foundation Building',
              resources: ['TypeScript Fundamentals', 'System Design Basics', 'Code Architecture Patterns'],
            },
            {
              timeframe: '2-4 months',
              focus: 'Advanced Skills',
              resources: ['Cloud Platforms (AWS/Azure)', 'Microservices Architecture', 'API Design Principles'],
            },
            {
              timeframe: '4-6 months',
              focus: 'Specialization & Portfolio',
              resources: ['Advanced System Design', 'Open Source Contributions', 'Tech Leadership Skills'],
            },
          ],
          salaryInsights: {
            range: '$80k - $150k',
            median: '$115k',
            factors: ['Experience level', 'Company size', 'Location', 'Specialization'],
          },
          recommendedPath: generateRecommendationText(baseCompatibility, jobGoal, targetCompany, assessmentData),
        });
      }, 3000);
    });
  };

  // Helper functions
  const generatePersonalityInsight = (data) => {
    const { personal } = data;
    if (personal.workPreference === 'Independently') {
      return 'Your preference for independent work aligns well with roles requiring deep focus and self-direction.';
    }
    return 'Your collaborative nature makes you well-suited for team-based roles and cross-functional projects.';
  };

  const generateLearningPath = (data) => {
    const comfort = data.skills.learningComfort;
    if (comfort >= 4) {
      return "Your high comfort with new technologies suggests you'd thrive in rapidly evolving fields.";
    }
    return 'Consider structured learning approaches to build confidence with new technologies.';
  };

  const generateCareerAlignment = (data, jobGoal) => {
    const goal = data.career.primaryGoal;
    if (goal === 'Technical Expertise' && jobGoal.toLowerCase().includes('engineer')) {
      return 'Your technical career goals strongly align with engineering roles.';
    }
    return 'Your career aspirations show good alignment with the chosen path.';
  };

  const generateRecommendationText = (compatibility, jobGoal, targetCompany, assessmentData) => {
    const baseText = `Based on your profile, you're ${compatibility}% ready for ${jobGoal} at ${targetCompany}.`;

    if (assessmentData) {
      return `${baseText} Your assessment shows strong alignment with this career path, particularly in areas of ${assessmentData.skills.technicalSkills.slice(0, 2).join(' and ')}. Focus on developing the missing technical skills while leveraging your existing strengths in ${assessmentData.skills.softSkills.slice(0, 2).join(' and ')}.`;
    }

    return `${baseText} Consider taking our detailed assessment for more personalized insights and recommendations.`;
  };

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleAssessmentComplete = (data) => {
    setAssessmentData(data);
    setCurrentView('home');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setError(null);
  };

  const analyzeCareerPathHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setActiveStep(0);

    try {
      const skillsList = currentSkills
        .split(',')
        .map((skill) => skill.trim())
        .filter((skill) => skill);
      const result = await enhancedAnalyzeCareerPath(jobGoal, skillsList, targetCompany, assessmentData);
      setAnalysis(result);
      setCurrentView('results');

      result.careerPathSteps.forEach((_, index) => {
        setTimeout(() => setActiveStep(index), (index + 1) * 1000);
      });
    } catch (err) {
      setError('Failed to analyze career path. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (currentView === 'assessment') {
    return <Assessment onComplete={handleAssessmentComplete} onBack={handleBackToHome} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* API Key Warning */}
      <APIKeyCheck />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
        <FloatingOrb className="-left-32 top-10 h-64 w-64" delay={0} />
        <FloatingOrb className="right-10 top-1/3 h-48 w-48" delay={2} />
        <FloatingOrb className="bottom-20 left-1/4 h-32 w-32" delay={4} />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/5 to-pink-900/10" />
      </div>

      {/* Enhanced Chatbot with context */}
      <Chatbot
        assessmentData={assessmentData}
        userProfile={{
          jobGoal,
          currentSkills,
          targetCompany,
          analysis,
        }}
      />

      {/* Home View */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <div className="relative z-10 pb-32 pt-20">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <div className="relative mb-8 inline-block">
                <Brain className="mx-auto h-24 w-24 text-purple-400" />
                <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl" />
              </div>

              <h1 className="mb-6 text-6xl font-bold md:text-7xl">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                <span className="text-white">Career Navigator</span>
              </h1>

              <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-300">
                Transform your career journey with intelligent insights. Get personalized roadmaps, skill gap analysis,
                salary insights, and strategic guidance powered by cutting-edge AI technology.
              </p>

              <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GlowButton onClick={handleStartAssessment} size="lg">
                  <Brain className="mr-3 h-6 w-6" />
                  Take Complete Assessment
                </GlowButton>
                <GlowButton
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('analysis-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Quick Analysis
                </GlowButton>
              </div>

              {/* Assessment Completion Status */}
              {assessmentData && (
                <div className="mx-auto mb-12 max-w-lg rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <CheckCircle2 className="h-8 w-8 text-green-400" />
                    <h3 className="text-lg font-semibold text-green-300">Assessment Completed!</h3>
                  </div>
                  <p className="text-sm text-green-200">
                    Your comprehensive career assessment is ready. Proceed with the analysis below for enhanced
                    personalized recommendations.
                  </p>
                </div>
              )}

              {/* Enhanced Feature Grid */}
              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
                {[
                  {
                    icon: Target,
                    title: 'Precision Matching',
                    desc: 'AI-powered compatibility scoring with dream roles',
                    color: 'purple',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Growth Roadmaps',
                    desc: 'Step-by-step career advancement strategies',
                    color: 'blue',
                  },
                  {
                    icon: DollarSign,
                    title: 'Salary Insights',
                    desc: 'Real-time compensation data and trends',
                    color: 'green',
                  },
                  {
                    icon: MessageCircle,
                    title: 'AI Career Chat',
                    desc: 'Get instant answers to your career questions',
                    color: 'pink',
                  },
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100" />
                    <div className="relative h-full rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50">
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-r ${
                          feature.color === 'purple'
                            ? 'from-purple-500 to-purple-600'
                            : feature.color === 'blue'
                              ? 'from-blue-500 to-blue-600'
                              : feature.color === 'green'
                                ? 'from-green-500 to-green-600'
                                : 'from-pink-500 to-pink-600'
                        } mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analysis Form */}
          <div id="analysis-form" className="relative z-10 pb-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl" />
                <div className="relative rounded-3xl border border-gray-700/50 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                  <div className="mb-10 text-center">
                    <Sparkles className="mx-auto mb-6 h-10 w-10 text-purple-400" />
                    <h2 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                      {assessmentData ? 'Enhanced Career Analysis' : 'Career Path Analysis'}
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-400">
                      {assessmentData
                        ? 'Your assessment data will provide deeper insights and more accurate recommendations'
                        : "Tell us about your goals and we'll create a personalized roadmap for success. Use our AI chat for instant help!"}
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
                      <AlertCircle className="h-5 w-5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={analyzeCareerPathHandler} className="space-y-8">
                    <div className="grid gap-8 md:grid-cols-1">
                      <div>
                        <label className="mb-4 block flex items-center text-lg font-medium text-white">
                          <Target className="mr-3 h-6 w-6 text-purple-400" />
                          What's your dream role?
                        </label>
                        <input
                          type="text"
                          value={jobGoal}
                          onChange={(e) => setJobGoal(e.target.value)}
                          placeholder="e.g., Senior Full Stack Engineer, Data Scientist, Product Manager, UX Designer"
                          className="w-full rounded-xl border border-gray-600/50 bg-gray-700/50 px-6 py-4 text-lg text-white placeholder-gray-400 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                          required
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label className="mb-4 block flex items-center text-lg font-medium text-white">
                          <Code className="mr-3 h-6 w-6 text-purple-400" />
                          What skills do you currently have?
                        </label>
                        <textarea
                          value={currentSkills}
                          onChange={(e) => setCurrentSkills(e.target.value)}
                          placeholder="e.g., JavaScript, Python, React, SQL, Project Management, Communication, Leadership, Data Analysis..."
                          className="h-36 w-full resize-none rounded-xl border border-gray-600/50 bg-gray-700/50 px-6 py-4 text-lg text-white placeholder-gray-400 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                          required
                          disabled={isLoading}
                        />
                        <p className="mt-2 text-sm text-gray-400">
                          Separate skills with commas. Include both technical and soft skills.
                        </p>
                      </div>

                      <div>
                        <label className="mb-4 block flex items-center text-lg font-medium text-white">
                          <Building2 className="mr-3 h-6 w-6 text-purple-400" />
                          Target company or industry
                        </label>
                        <input
                          type="text"
                          value={targetCompany}
                          onChange={(e) => setTargetCompany(e.target.value)}
                          placeholder="e.g., Google, Microsoft, Apple, Tesla, Netflix, Startup, FinTech, Healthcare, E-commerce"
                          className="w-full rounded-xl border border-gray-600/50 bg-gray-700/50 px-6 py-4 text-lg text-white placeholder-gray-400 transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <GlowButton onClick={analyzeCareerPathHandler} disabled={isLoading} className="w-full" size="lg">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Analyzing Your Career Path...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-3 h-6 w-6" />
                          Generate My Personalized Career Roadmap
                          <ChevronRight className="ml-3 h-6 w-6" />
                        </>
                      )}
                    </GlowButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Results View */}
      {currentView === 'results' && analysis && (
        <div className="relative z-10 pb-20 pt-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <div className="mb-16 text-center">
              <div className="mb-8 flex items-center justify-center gap-4">
                <GlowButton variant="secondary" onClick={handleBackToHome}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </GlowButton>
                <div className="flex-1" />
                <GlowButton variant="outline" onClick={handleStartAssessment}>
                  <Brain className="mr-2 h-5 w-5" />
                  {assessmentData ? 'Retake Assessment' : 'Take Assessment'}
                </GlowButton>
              </div>

              <Award className="mx-auto mb-6 h-16 w-16 text-purple-400" />
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Your {assessmentData ? 'Enhanced ' : ''}Career Analysis
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-400">
                {assessmentData
                  ? 'Analysis enhanced with your comprehensive assessment data for maximum accuracy'
                  : 'Based on your inputs - take our assessment or ask our AI chat for even deeper insights'}
              </p>
            </div>

            {/* Compatibility Score */}
            <div className="mb-16 flex justify-center">
              <div className="text-center">
                <ProgressRing progress={analysis.compatibility} size={220} />
                <p className="mt-6 text-xl font-medium text-gray-400">Career Compatibility Score</p>
                <p className="mt-2 text-sm text-gray-500">
                  for {jobGoal} at {targetCompany}
                </p>
              </div>
            </div>

            {/* Assessment Insights */}
            {analysis.assessmentInsights && (
              <div className="mb-16 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-600/10 to-emerald-600/10 p-8 backdrop-blur-sm">
                <h3 className="mb-8 flex items-center text-2xl font-bold text-white">
                  <Brain className="mr-4 h-8 w-8 text-green-400" />
                  Assessment-Based Insights
                </h3>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-green-300">Personality Match</h4>
                    </div>
                    <p className="text-gray-300">{analysis.assessmentInsights.personalityMatch}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-green-300">Learning Path</h4>
                    </div>
                    <p className="text-gray-300">{analysis.assessmentInsights.learningPath}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-green-300">Career Alignment</h4>
                    </div>
                    <p className="text-gray-300">{analysis.assessmentInsights.careerAlignment}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Analysis */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <SkillCard
                title="Your Current Skills"
                skills={analysis.matchedSkills}
                type="matched"
                icon={CheckCircle2}
              />
              <SkillCard title="Skills to Develop" skills={analysis.missingSkills} type="missing" icon={TrendingUp} />
            </div>

            {/* Company & Salary Insights */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              {/* Company Insights */}
              <div className="rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm">
                <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
                  <Building2 className="mr-3 h-6 w-6 text-purple-400" />
                  {targetCompany} Insights
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 flex items-center text-lg font-semibold text-purple-300">
                      <Users className="mr-2 h-4 w-4" /> Culture
                    </h4>
                    <p className="text-sm text-gray-300">{analysis.companyInsights.culture}</p>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-purple-300">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysis.companyInsights.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-purple-300">Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {analysis.companyInsights.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle2 className="mr-2 h-3 w-3 text-green-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Salary Insights */}
              <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-600/10 to-emerald-600/10 p-8 backdrop-blur-sm">
                <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
                  <DollarSign className="mr-3 h-6 w-6 text-green-400" />
                  Salary Insights
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mb-2 text-3xl font-bold text-green-300">{analysis.salaryInsights.range}</div>
                    <div className="text-lg text-gray-300">Expected Range</div>
                    <div className="mt-1 text-sm text-gray-400">Median: {analysis.salaryInsights.median}</div>
                  </div>
                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-green-300">Salary Factors</h4>
                    <div className="space-y-2">
                      {analysis.salaryInsights.factors.map((factor, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="mr-2 h-3 w-3 text-green-400" />
                          {factor}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Roadmap */}
            <div className="mb-16 rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm">
              <h3 className="mb-8 flex items-center text-2xl font-bold text-white">
                <Rocket className="mr-4 h-8 w-8 text-purple-400" />
                Your Development Roadmap
              </h3>
              <div className="space-y-6">
                {analysis.careerPathSteps.map((step, index) => (
                  <StepCard key={index} step={step} index={index} isActive={activeStep === index} />
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-8 backdrop-blur-sm">
              <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
                <Sparkles className="mr-4 h-8 w-8 text-purple-400" />
                AI-Powered Recommendations
              </h3>
              <div className="prose prose-invert mb-8 max-w-none">
                <p className="text-lg leading-relaxed text-gray-300">{analysis.recommendedPath}</p>
              </div>

              <div className="grid gap-6 border-t border-gray-700/50 pt-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-purple-300">Next Actions</h4>
                  <div className="space-y-3">
                    <GlowButton variant="outline" size="sm" className="w-full justify-start">
                      <Github className="mr-2 h-4 w-4" />
                      Build Portfolio Projects
                    </GlowButton>
                    <GlowButton variant="outline" size="sm" className="w-full justify-start">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Learning Roadmap
                    </GlowButton>
                    <GlowButton variant="outline" size="sm" className="w-full justify-start">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Network & Connect
                    </GlowButton>
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 text-lg font-semibold text-purple-300">Get Help</h4>
                  <div className="space-y-3">
                    <GlowButton variant="outline" size="sm" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Ask AI Career Assistant
                    </GlowButton>
                    <GlowButton variant="outline" size="sm" className="w-full justify-start">
                      <Brain className="mr-2 h-4 w-4" />
                      Take Full Assessment
                    </GlowButton>
                    <GlowButton variant="outline" size="sm" className="w-full justify-start">
                      <Trophy className="mr-2 h-4 w-4" />
                      Get Personalized Plan
                    </GlowButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-16 text-center">
              <GlowButton onClick={handleBackToHome} size="lg">
                <ArrowLeft className="mr-3 h-6 w-6" />
                Start New Analysis
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
