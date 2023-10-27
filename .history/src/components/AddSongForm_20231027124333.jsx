import { useState } from 'react';

function AddSongForm() {
  // Initialize the state for each input field
  const [songName, setSongName] = useState('');
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the input fields and the image size and aspect ratio
    if (songName && url && source && thumbnail) {
      if (thumbnail.size <= 3000 * 3000 && thumbnail.width / thumbnail.height === 1) {
        // Create a FormData object to send the form data and the image file
        const formData = new FormData();
        formData.append('songName', songName);
        formData.append('url', url);
        formData.append('source', source);
        formData.append('thumbnail', thumbnail);

        // Send the form data to the server or do something else with it
        console.log(formData);
      } else {
        alert('Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000 pixels');
      }
    } else {
      alert('Please fill in all the fields');
    }
  };

  // Handle the image file selection
  const handleFileChange = (event) => {
    // Get the first file from the event target
    const file = event.target.files[0];
    // Create a FileReader object to read the file data
    const reader = new FileReader();
    // Set an onload callback function to get the image width and height
    reader.onload = (e) => {
      // Create an Image object to load the image data
      const image = new Image();
      // Set an onload callback function to get the image width and height
      image.onload = () => {
        // Set the thumbnail state with the file, width and height properties
        setThumbnail({ file, width: image.width, height: image.height });
      };
      // Set the image source to the reader result
      image.src = e.target.result;
    };
    // Read the file as a data URL
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>Add Song</h3>
      </div>
      <div className="form-body">
        <div className="form-group">
          <label>Song Name</label>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>URL</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Song Source</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Click to Upload Profile Thumbnail</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>
      <div className="form-footer">
        <p>
          Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000 pixels
        </p>
        <button type="submit">Add</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default AddSongForm;