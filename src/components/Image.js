import React from "react";

class Image extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Image is being uploaded!");
  };

  render() {
    return (
      <div className="container">
        <h6>Image Upload</h6>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input type="file" name="image" required />
          <button type="submit">Upload Image</button>
        </form>
      </div>
    );
  }
}

export default Image;
