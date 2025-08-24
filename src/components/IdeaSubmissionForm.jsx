import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const IdeaSubmissionForm = ({ onClose }) => {
  const [tittle, setTittle] = useState('');
  const [Description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [Resources, setResources] = useState([]);
  const [media, setMedia] = useState([]);
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setMediaFiles(files);
    setMedia(files.map((file) => URL.createObjectURL(file)));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('description', Description);
    formData.append('tags', JSON.stringify(tags));
    formData.append('resources', JSON.stringify(Resources));

    media.forEach((file) => formData.append('media', file));

    try {
      const res = await fetch('http://localhost:5000/devdisplay/v1/idea-submissions/', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (onClose) onClose();
    } catch (err) {
      console.log('Error submitting idea:', err);
    }
    console.log({ tittle, Description, tags, Resources, media });
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="flex w-[90%] max-w-lg flex-col gap-4 rounded-md bg-blue-950 p-10">
        <div onClick={() => onClose()} className="flex cursor-pointer items-center justify-between">
          <div className="text-xl font-bold text-white">Idea Submission Form</div>
          <div>
            <FaTimes />
          </div>
        </div>

        <form onSubmit={onSubmitHandler} className="flex flex-col items-center gap-3 text-black">
          <input
            type="text"
            placeholder="Title"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            required
            className="rounded-md p-2"
          />

          <textarea
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-md p-2"
          ></textarea>

          <input
            type="text"
            placeholder="Tags (comma separated)"
            required
            value={tags}
            onChange={(e) => setTags(e.target.value.split(','))}
            className="rounded-md p-2"
          />

          <input
            type="text"
            placeholder="Resources Needed (comma separated)"
            required
            value={Resources}
            onChange={(e) => setResources(e.target.value.split(','))}
            className="rounded-md p-2"
          />

          {/* Media Upload */}
          <label
            htmlFor="fileInput"
            className="flex cursor-pointer flex-col items-center rounded-md border-2 border-dashed bg-gradient-to-br from-gray-100 to-gray-300 p-4"
          >
            {media.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {media.map((img, index) => (
                  <img src={img} key={index} alt={`Preview ${index}`} className="h-auto w-full rounded-md" />
                ))}
              </div>
            ) : (
              <span className="text-gray-500">📷 Optional Media Uploads (you can upload multiple)</span>
            )}
          </label>
          <input type="file" id="fileInput" accept="image/*" multiple className="hidden" onChange={handleImageChange} />

          <button type="submit" className="mt-4 w-1/3 rounded-md bg-gray-900 px-6 py-2 text-white hover:bg-gray-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdeaSubmissionForm;
