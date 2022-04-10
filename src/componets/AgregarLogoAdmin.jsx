import React from "react";

export default function AgregarLogoAdmin() {
  return (
    <>
      <div className="form-group">
        <label>Upload your restaurant logo</label>
        <div id="logo_picture" className="dropzone">
          <input name="file" type="file" />
          <div className="dz-default dz-message">
            <span>Click or Drop Images Here</span>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Upload your restaurant photos</label>
        <div id="photos" className="dropzone">
          <input name="file" type="file" multiple />
          <div className="dz-default dz-message">
            <span>Click or Drop Images Here</span>
          </div>
        </div>
      </div>
    </>
  );
}
