import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { saveAs } from 'file-saver';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Libraries for text extraction
import mammoth from 'mammoth'; // For DOCX files
import * as pdfjsLib from 'pdfjs-dist'; // For PDF files

const ResumeBuilder = () => {
  const [resumeText, setResumeText] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  // File upload and text extraction
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = file.name.split('.').pop();
    if (fileType === 'pdf') {
      extractTextFromPDF(file);
    } else if (fileType === 'docx') {
      extractTextFromDOCX(file);
    } else {
      toast.error('Unsupported file type. Please upload a PDF or DOCX file.');
    }
  };

  const extractTextFromPDF = (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async () => {
      const typedArray = new Uint8Array(fileReader.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      let text = '';
      for (let i = 0; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i + 1);
        const content = await page.getTextContent();
        text += content.items.map((item) => item.str).join(' ');
      }
      setResumeText(text);
      toast.success('PDF text extracted successfully!');
    };
    fileReader.readAsArrayBuffer(file);
  };

  const extractTextFromDOCX = (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async () => {
      const result = await mammoth.extractRawText({ arrayBuffer: fileReader.result });
      setResumeText(result.value);
      toast.success('DOCX text extracted successfully!');
    };
    fileReader.readAsArrayBuffer(file);
  };

  // Mock AI responses
  const analyzeResume = () => {
    if (!resumeText) {
      toast.error('Please upload a resume first.');
      return;
    }
    setFeedback(`Analysis of resume: ${resumeText.substring(0, 100)}...`);
    toast.success('Resume analyzed successfully!');
  };

  const getResumeScore = () => {
    if (!resumeText) {
      toast.error('Please upload a resume first.');
      return;
    }
    setScore('Your resume score is 85/100. Great job!');
    toast.success('Resume scored successfully!');
  };

  const downloadImprovedResume = () => {
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'Improved_Resume.txt');
    toast.success('Resume downloaded successfully!');
  };

  return (
    <div>
      <ToastContainer />
      <h1>🚀 AI ResumeXpert Analyst</h1>
      <p>Upload your resume to get detailed AI feedback, ATS analysis, and job match insights!</p>

      <input type="file" onChange={handleFileUpload} />
      {resumeText && (
        <div>
          <h3>Resume Text Extracted:</h3>
          <textarea value={resumeText} readOnly rows="10" style={{ width: '100%' }}></textarea>
        </div>
      )}

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>📂 Upload Resume</Tab>
          <Tab>📊 Job Match Analysis</Tab>
          <Tab>🚀 AI Project Suggestions</Tab>
          <Tab>🤷‍♂ ATS Score Checker</Tab>
          <Tab>📊 AI-Powered Resume Ranking</Tab>
        </TabList>

        {/* Tab 1: Resume Upload and Analysis */}
        <TabPanel>
          <button onClick={analyzeResume}>Analyze Resume</button>
          <button onClick={getResumeScore}>Get Resume Score</button>
          <button onClick={downloadImprovedResume}>Download Improved Resume</button>
          {feedback && (
            <p>
              <strong>Feedback:</strong> {feedback}
            </p>
          )}
          {score && (
            <p>
              <strong>Score:</strong> {score}
            </p>
          )}
        </TabPanel>

        {/* Tab 2: Job Match Analysis */}
        <TabPanel>
          <textarea
            placeholder="Paste job description here..."
            rows="5"
            style={{ width: '100%' }}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
          <button onClick={() => toast.info('Job match analysis coming soon!')}>Analyze Job Fit</button>
        </TabPanel>

        {/* Tab 3: AI Project Suggestions */}
        <TabPanel>
          <button onClick={() => toast.info('Project suggestions coming soon!')}>Get Project Suggestions</button>
        </TabPanel>

        {/* Tab 4: ATS Score Checker */}
        <TabPanel>
          <button onClick={() => toast.info('ATS Score Checker coming soon!')}>Check ATS Score</button>
        </TabPanel>

        {/* Tab 5: AI-Powered Resume Ranking */}
        <TabPanel>
          <button onClick={() => toast.info('Resume ranking coming soon!')}>Rank Resumes</button>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ResumeBuilder;

// https://github.com/abhishekkumar62000/AI-ResumeXpert-Analyst/blob/main/App.py
// # Import Important Library
// import streamlit as st
// import google.generativeai as genai
// import webbrowser
// from PyPDF2 import PdfReader
// from docx import Document
// from reportlab.pdfgen import canvas
// from reportlab.lib.pagesizes import letter

// # Set page configuration
// st.set_page_config(page_title="AI Resume Reviewer", page_icon="📄", layout="wide")

// # Fetch API key from Streamlit Secrets
// GEMINI_API_KEY = st.secrets["GEMINI_API_KEY"]

// # Ensure the API key is set
// if not GEMINI_API_KEY:
//     st.error("⚠ GEMINI API Key is missing. Set it in Streamlit Secrets!")
// else:
//     genai.configure(api_key=GEMINI_API_KEY)

// import google.api_core.exceptions  # Add this import

// # List available models to verify the model name
// try:
//     available_models = genai.list_models()
//     model_names = [model.name for model in available_models]

//     # Verify if the desired model is in the list
//     desired_model_name = "models/gemini-1.5-flash-latest"  # Replace with the correct model name
//     if desired_model_name in model_names:
//         model = genai.GenerativeModel(desired_model_name)
//     else:
//         st.error(f"⚠ Model '{desired_model_name}' not found. Available models: {model_names}")
//         st.stop()
// except google.api_core.exceptions.PermissionDenied as e:
//     st.error("⚠ Permission denied. Please check your API key permissions.")
//     st.stop()
// except google.api_core.exceptions.InvalidArgument as e:
//     st.error("⚠ Invalid argument. Please check the model name and API key.")
//     st.stop()
// except Exception as e:
//     st.error(f"⚠ An unexpected error occurred: {e}")
//     st.stop()

// def chat_with_gemini(prompt):
//     try:
//         response = model.generate_content(prompt)
//         return response.text if response else "No response received."
//     except google.api_core.exceptions.NotFound as e:
//         st.error("⚠ Model not found. Please check the model name and API key.")
//         return "Model not found."
//     except google.api_core.exceptions.PermissionDenied as e:
//         st.error("⚠ Permission denied. Please check your API key permissions.")
//         return "Permission denied."
//     except google.api_core.exceptions.InvalidArgument as e:
//         st.error("⚠ Invalid argument. Please check the model name and API key.")
//         return "Invalid argument."
//     except Exception as e:
//         st.error(f"⚠ An unexpected error occurred: {e}")
//         return f"An unexpected error occurred: {e}"

// # Your other code remains the same
// import asyncio

// try:
//     asyncio.get_running_loop()
// except RuntimeError:
//     asyncio.run(asyncio.sleep(0))  # ✅ Ensure a running event loop

// # UI Improvements
// st.title("🚀AI ResumeXpert Analyst 🤖")
// st.markdown("Upload your resume to get detailed AI feedback, ATS analysis, and job match insights!🧠")
// st.caption("📝 Rewrite. 🚀 Rank. 🎯 Recruit – AI ResumeXpert at Your Service!👨‍💻")

// AI_path = "AI.png"  # Ensure this file is in the same directory as your script
// try:
//     st.sidebar.image(AI_path)
// except FileNotFoundError:
//     st.sidebar.warning("AI.png file not found. Please check the file path.")

// image_path = "image.png"  # Ensure this file is in the same directory as your script
// try:
//     st.sidebar.image(image_path)
// except FileNotFoundError:
//     st.sidebar.warning("image.png file not found. Please check the file path.")

// # Sidebar Navigation
// with st.sidebar:
//     st.header("⚙ App Features")

//     tab_selection = st.radio("Select a Feature:", [
//         "📄 Resume Analysis",
//         "📊 ATS Score & Fixes",
//         "💼 Job Fit Analysis",
//         "🚀 AI Project Suggestions",
//         "💡 Best Career Path",
//         "🛠 Missing Skills & Learning Guide",
//         "🎓 Certifications & Courses",
//         "💰 Expected Salaries & Job Roles",
//         "📊 AI Resume Ranking",
//         "🔍 Personalized Job Alerts",
//         "✉ AI Cover Letter Generator",
//         "🎤 AI Mock Interviews"
//     ])

//     st.markdown("👨👨‍💻Developer:- Abhishek💖Yadav")

//     developer_path = "pic.jpg"  # Ensure this file is in the same directory as your script
//     try:
//         st.sidebar.image(developer_path)
//     except FileNotFoundError:
//         st.sidebar.warning("pic.jpg file not found. Please check the file path.")

// def extract_text(file):
//     if file.name.endswith(".pdf"):
//         pdf_reader = PdfReader(file)
//         return "\n".join([page.extract_text() for page in pdf_reader.pages if page.extract_text()])
//     elif file.name.endswith(".docx"):
//         doc = Document(file)
//         return "\n".join([para.text for para in doc.paragraphs])
//     else:
//         return "❌ Unsupported file format. Upload a PDF or DOCX."

// def analyze_resume(text):
//     prompt = f"""
//     You are an expert AI Resume Reviewer. Analyze the following resume thoroughly and provide structured insights on:
//     0️⃣ first Full Detail Analysis of Resume Files and Display all details of the resume
//     1️⃣ Strengths: What makes this resume stand out? Identify key skills, achievements, and formatting positives.
//     2️⃣ Areas for Improvement: Highlight missing elements, weak points, and vague descriptions that need enhancement.
//     3️⃣ Formatting Suggestions: Provide recommendations for a more professional and ATS-compliant structure.
//     4️⃣ ATS Compliance Check: Analyze the resume for ATS-friendliness, including keyword optimization and readability.
//     5️⃣ Overall Rating: Score the resume on a scale of 1 to 10 with justification.

//     Resume:
//     {text}
//     """
//     return chat_with_gemini(prompt)

// def match_job_description(resume_text, job_desc):
//     prompt = f"""
//     You are an AI Job Fit Analyzer. Compare the given resume with the provided job description and generate a structured report:

//     ✅ Matching Skills: Identify skills in the resume that match the job description.
//     ❌ Missing Skills: Highlight missing key skills that the candidate needs to acquire.
//     📊 Fit Percentage: Provide a percentage match score based on skillset, experience, and qualifications.
//     🏆 Final Verdict: Clearly state whether the candidate is a "Good Fit" or "Needs Improvement" with reasons.

//     Resume:
//     {resume_text}

//     Job Description:
//     {job_desc}
//     """
//     return chat_with_gemini(prompt)

// def get_resume_score(resume_text):
//     prompt = f"""
//     As an AI Resume Scorer, evaluate the resume across different factors and provide a structured breakdown:

//     🎯 Skills Match: XX% (How well the skills align with industry requirements)
//     📈 Experience Level: XX% (Assessment of experience depth and relevance)
//     ✨ Formatting Quality: XX% (Resume structure, clarity, and ATS compliance)
//     🔍 Overall Strength: XX% (General effectiveness of the resume)

//     Provide the final Resume Score (0-100) with a breakdown and actionable insights for improvement.

//     Resume:
//     {resume_text}
//     """
//     return chat_with_gemini(prompt)

// def get_improved_resume(resume_text):
//     prompt = f"""
//     Optimize the following resume to enhance its professionalism, clarity, and ATS compliance:

//     - ✅ Fix grammar and spelling errors
//     - 🔥 Improve clarity, conciseness, and professionalism
//     - ✨ Optimize formatting for readability and ATS-friendliness
//     - 📌 Ensure keyword optimization to improve job match chances
//     - 🏆 Enhance overall presentation while maintaining content integrity

//     Resume:
//     {resume_text}

//     Provide only the improved resume text.
//     """
//     return chat_with_gemini(prompt)

// def create_pdf(text, filename="Optimized_Resume.pdf"):
//     c = canvas.Canvas(filename, pagesize=letter)
//     c.drawString(50, 750, text)
//     c.save()
//     return filename

// # Create Section-wise Tabs
// tab1, tab2, tab3, tab4, tab5 = st.tabs(["📂 Upload Resume", "📊 Job Match Analysis", "🚀 AI Project Suggestions", "🤷‍♂ ATS Score Checker", "📊 AI-Powered Resume Ranking"])

// # Tab 1: Resume Upload and Analysis
// with tab1:
//     uploaded_file = st.file_uploader("Upload Resume (PDF/DOCX)", type=["pdf", "docx"])
//     if uploaded_file:
//         st.success("✅ Resume Uploaded Successfully!")
//         resume_text = extract_text(uploaded_file)

//         # AI Resume Analysis
//         feedback = analyze_resume(resume_text)
//         score_feedback = get_resume_score(resume_text)

//         st.subheader("📝 AI Feedback")
//         st.write(feedback)

//         st.subheader("⭐ Resume Score & ATS Breakdown")
//         st.write(score_feedback)

//         if st.button("🚀 Improve Resume & Download"):
//             improved_resume_text = get_improved_resume(resume_text)
//             updated_pdf = create_pdf(improved_resume_text)
//             st.success("🎉 Resume Improved Successfully!")
//             st.download_button("⬇ Download Optimized Resume", open(updated_pdf, "rb"), file_name="Optimized_Resume.pdf")

// # Tab 2: Job Match Analysis
// with tab2:
//     job_desc = st.text_area("📌 Paste Job Description Here:")
//     if job_desc and 'resume_text' in locals():
//         st.write("🔍 Analyzing job fit...")
//         job_fit_feedback = match_job_description(resume_text, job_desc)
//         st.subheader("📊 Job Fit Analysis")
//         st.write(job_fit_feedback)

// # Function to Generate AI-Based Project Suggestions (5 per level)
// def suggest_projects(resume_text):
//     prompt = f"""
//     You are a project mentor Expert. Based on the resume below, suggest 5 projects for each level:

//     Basic Level (For Beginners): 5 easy projects to get started.
//     Intermediate Level (For Practitioners): 5 projects requiring more expertise.
//     Advanced Level (For Experts): 5 complex projects showcasing deep skills.

//     🔹 For Each Project: Provide a brief description and the required tech stack (tools, frameworks, technologies).
//     🔹 Make sure the projects align with the user's skills, experience, and domain.

//     Resume:
//     {resume_text}
//     """
//     return chat_with_gemini(prompt)

// # Tab 3: AI Project Suggestions
// with tab3:
//     st.subheader("🚀 AI-Powered Project Suggestions")
//     if uploaded_file and 'resume_text' in locals():
//         if st.button("📌 Get Project Ideas Based on Resume"):
//             project_suggestions = suggest_projects(resume_text)
//             st.write(project_suggestions)

// # Function to Calculate ATS Score & Provide Feedback
// def check_ats_score(resume_text):
//     prompt = f"""
//     You are an ATS resume evaluator. Based on the resume below, analyze its ATS compatibility on a scale of 100.

//     Scoring Criteria:
//     - ✅ Proper Formatting & Readability (20%)
//     - ✅ Use of Correct Keywords (30%)
//     - ✅ Section Organization (20%)
//     - ✅ No Unnecessary Graphics or Tables (15%)
//     - ✅ Proper Contact Info & Structure (15%)

//     Provide Output as:
//     - ATS Score (out of 100)
//     - Improvement Suggestions to improve 100 ATS Score

//     Resume:
//     {resume_text}
//     """
//     response = chat_with_gemini(prompt)
//     try:
//         ats_score = int(response.split("ATS Score:")[1].split("/100")[0].strip())
//     except (IndexError, ValueError):
//         ats_score = 0  # Default to 0 if parsing fails
//     ats_feedback = response.split("Improvement Suggestions to improve 100 ATS Score")[1].strip() if "Improvement Suggestions to improve 100 ATS Score" in response else "No feedback available."
//     return ats_score, ats_feedback

// # Tab 4: ATS Score Checker
// with tab4:
//     st.subheader("🤷‍♂ ATS Score Checker")

//     if uploaded_file and 'resume_text' in locals():
//         if st.button("🔍 Check ATS Score"):
//             ats_score, ats_feedback = check_ats_score(resume_text)
//             st.markdown(f"### ✅ Your ATS Score: {ats_score}/100")
//             if ats_score < 80:
//                 st.warning("⚠ Your resume needs improvement!")
//                 st.write(ats_feedback)
//             else:
//                 st.success("🎉 Your resume is ATS-friendly!")

// # Tab 5: AI-Powered Resume Ranking
// with tab5:
//     st.subheader("📊 AI-Powered Resume Ranking")

//     # Upload multiple resume files
//     uploaded_files = st.file_uploader("Upload Multiple Resumes (PDF/DOCX)", type=["pdf", "docx"], accept_multiple_files=True)

//     # Process resumes if uploaded
//     if uploaded_files:
//         resume_texts = []
//         file_names = []

//         for file in uploaded_files:
//             text = extract_text(file)  # Function to extract text from PDF/DOCX
//             if text.startswith("❌"):  # Error handling
//                 st.error(f"❌ Unable to process: {file.name}")
//             else:
//                 resume_texts.append(text)
//                 file_names.append(file.name)

//         if len(resume_texts) > 0:
//             if st.button("🚀 Rank Resumes"):  # Button to rank resumes
//                 ranked_resumes = []

//                 for i, text in enumerate(resume_texts):
//                     rank_prompt = f"""
//                     You are an AI Resume Evaluator. Assess the following resume based on:
//                     ✅ *ATS Compatibility*
//                     ✅ *Readability & Formatting*
//                     ✅ *Job Fit & Skills Alignment*

//                     Give a *score out of 100* and a brief analysis.

//                     Resume:
//                     {text}
//                     """
//                     score_response = chat_with_gemini(rank_prompt)  # AI function to analyze resume
//                     try:
//                         score = int(score_response.split("Score:")[-1].split("/")[0].strip())  # Extract score
//                     except (IndexError, ValueError):
//                         score = 0  # Default to 0 if parsing fails
//                     ranked_resumes.append((file_names[i], score))

//                 # Sort resumes by score (Highest to Lowest)
//                 ranked_resumes.sort(key=lambda x: x[1], reverse=True)

//                 # Display ranked results
//                 st.subheader("🏆 Ranked Resumes")
//                 for i, (name, score) in enumerate(ranked_resumes, start=1):
//                     st.write(f"{i}. {name}** - *Score: {score}/100*")

// # Creating multiple tabs together
// tab6, tab7, tab8, tab9, tab10, tab11, tab12 = st.tabs([
//     "💡 AI Career Roadmap & Skills Guide",
//     "🛠 Missing Skills & How to Learn Them",
//     "📜 Certifications & Course Recommendations",
//     "💰 Expected Salaries & Job Roles",
//     "📢 Resume Feedback via AI Chat",
//     "📢 Personalized Job Alerts",
//     "💡 Soft Skills Analysis & Improvement"
// ])

// # Tab 6: Best Career Path
// with tab6:
//     st.subheader("💡 AI Career Roadmap & Skills Guide")
//     if uploaded_file and 'resume_text' in locals():
//         if st.button("🚀 Get Career Insights"):
//             def generate_career_roadmap(resume_text):
//                 prompt = f"""
//                 You are an AI Career Advisor. Based on the following resume, suggest the best career path:

//                 ✅ Current Strengths & Skills: Identify the user's key strengths.
//                 🚀 Best Career Path: Recommend an ideal career direction.
//                 📈 Career Growth Roadmap:
//                    - 🔹 Entry-Level Roles
//                    - 🔸 Mid-Level Roles
//                    - 🔺 Senior-Level Roles
//                 🔮 Future Industry Trends: Emerging trends & opportunities.

//                 Resume:
//                 {resume_text}
//                 """
//                 return chat_with_gemini(prompt)

//             career_guidance = generate_career_roadmap(resume_text)
//             st.write(career_guidance)

// # Tab 7: Missing Skills
// with tab7:
//     st.subheader("🛠 Missing Skills & How to Learn Them")
//     if uploaded_file and 'resume_text' in locals():
//         if st.button("📚 Identify Missing Skills"):
//             def find_missing_skills(resume_text):
//                 prompt = f"""
//                 You are an AI Skill Analyzer. Analyze the following resume and provide missing skills:

//                 ✅ Existing Skills: List the current skills of the user.
//                 ❌ Missing Skills: Identify skills required for industry standards.
//                 🎯 How to Learn Them: Provide learning resources (courses, books, projects).
//                 🔥 Importance of These Skills: Explain how these skills will improve job opportunities.

//                 Resume:
//                 {resume_text}
//                 """
//                 return chat_with_gemini(prompt)

//             missing_skills = find_missing_skills(resume_text)
//             st.write(missing_skills)

// # Tab 8: Certifications & Courses
// with tab8:
//     st.subheader("📜 Certifications & Course Recommendations")
//     if uploaded_file and 'resume_text' in locals():
//         if st.button("🎓 Get Course Recommendations"):
//             def recommend_certifications(resume_text):
//                 prompt = f"""
//                 You are an AI Career Coach. Analyze the following resume and suggest relevant certifications & courses:

//                 ✅ Top 5 Certifications: Industry-recognized certifications that align with the user’s skills and career path.
//                 📚 Top 5 Online Courses: From platforms like Coursera, Udemy, LinkedIn Learning, or edX.
//                 🔥 Why These Certifications?: Explain why these certifications/courses will boost their career.
//                 🛠 Preparation Resources: Provide book or website recommendations.

//                 Resume:
//                 {resume_text}
//                 """
//                 return chat_with_gemini(prompt)

//             courses = recommend_certifications(resume_text)
//             st.write(courses)

// # Tab 9: Expected Salaries & Job Roles
// with tab9:
//     st.subheader("💰 Expected Salaries & Job Roles")
//     if uploaded_file and 'resume_text' in locals():
//         if st.button("💼 Get Salary & Job Role Insights"):
//             def get_salary_and_jobs(resume_text):
//                 prompt = f"""
//                 You are an AI Career Consultant. Analyze the following resume and provide structured salary insights:

//                 💼 Best Job Roles: Suggest top job roles based on user’s skills, experience, and industry trends.
//                 🌎 Salary Estimates by Region:
//                    - USA: $XX,XXX - $XX,XXX per year
//                    - UK: £XX,XXX - £XX,XXX per year
//                    - India: ₹XX,XX,XXX - ₹XX,XX,XXX per year
//                    - Remote/Global: $XX,XXX per year (varies based on employer)
//                 📈 Career Growth Insights: How salaries and opportunities increase with upskilling.
//                 🔥 Top Industries Hiring: Which industries are in demand for the user's skills?

//                 Resume:
//                 {resume_text}
//                 """
//                 return chat_with_gemini(prompt)

//             salary_and_jobs = get_salary_and_jobs(resume_text)
//             st.write(salary_and_jobs)

// # Tab 10: Interactive Resume Q&A
// with tab10:
//     st.subheader("📢 Ask AI About Your Resume")
//     st.markdown("💬 Type any question about your resume, and AI will provide detailed guidance!")

//     if uploaded_file:
//         user_question = st.text_input("❓ Ask anything about your resume:")

//         if user_question:
//             with st.spinner("🤖 AI is analyzing your resume..."):
//                 prompt = f"""
//                 You are an expert AI Resume Consultant. A user has uploaded their resume and is asking the following question:

//                 Question: {user_question}

//                 Resume:
//                 {resume_text}

//                 Provide a detailed, structured, and insightful response, including:
//                 - Key observations from their resume.
//                 - Actionable improvements tailored to their experience.
//                 - Industry best practices for better job opportunities.
//                 """
//                 response = chat_with_gemini(prompt)
//                 st.write("💡 AI Response:")
//                 st.write(response)

// # Tab 11: Personalized Job Alerts
// with tab11:
//     st.subheader("🔔 Personalized Job Alerts")

//     # Input fields for user preferences
//     job_title = st.text_input("🎯 Enter Job Title (e.g., Data Scientist, Software Engineer)")
//     location = st.text_input("📍 Preferred Location (e.g., Remote, New York, Bangalore)")

//     if st.button("🔍 Find Jobs Now"):
//         if job_title and location:
//             st.success(f"🔗 Here are job links for *{job_title}* in *{location}*:")

//             # Dynamic job search URLs
//             indeed_url = f"https://www.indeed.com/jobs?q={job_title.replace(' ', '+')}&l={location.replace(' ', '+')}"
//             linkedin_url = f"https://www.linkedin.com/jobs/search?keywords={job_title.replace(' ', '%20')}&location={location.replace(' ', '%20')}"
//             naukri_url = f"https://www.naukri.com/{job_title.replace(' ', '-')}-jobs-in-{location.replace(' ', '-')}"
//             google_jobs_url = f"https://www.google.com/search?q={job_title.replace(' ', '+')}+jobs+in+{location.replace(' ', '+')}"

//             # Display clickable job links
//             st.markdown(f"[🟢 Indeed Jobs]({indeed_url})")
//             st.markdown(f"[🔵 LinkedIn Jobs]({linkedin_url})")
//             st.markdown(f"[🟠 Naukri Jobs]({naukri_url})")
//             st.markdown(f"[🔴 Google Jobs]({google_jobs_url})")

//             # Open default browser with job search links
//             webbrowser.open(indeed_url)
//             webbrowser.open(linkedin_url)
//             webbrowser.open(naukri_url)
//             webbrowser.open(google_jobs_url)
//         else:
//             st.error("⚠ Please enter both job title and location to get job alerts.")

// # Tab 12: Soft Skills Analysis & Improvement Tips
// with tab12:
//     st.subheader("💡 Soft Skills Analysis & Improvement")

//     if uploaded_file:
//         resume_text = extract_text(uploaded_file)  # Ensure resume_text is defined
//         soft_skills_prompt = f"""
//         You are an AI Soft Skills Analyzer. Based on the resume, identify the candidate's *soft skills* and suggest ways to improve them:

//         ✅ *Identified Soft Skills*
//         ✅ *Why these skills are important*
//         ✅ *Recommended activities to strengthen them*
//         ✅ *Online courses or books to improve them*

//         Resume:
//         {resume_text}
//         """
//         if st.button("📚 Get Soft Skills Insights"):
//             soft_skills_analysis = chat_with_gemini(soft_skills_prompt)
//             st.write(soft_skills_analysis)
//     else:
//         st.warning("Please upload a resume to analyze soft skills.")
