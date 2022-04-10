import React from 'react'

function CambiarCorreo() {
    return (
        <>
            <div className="indent_title_in">
                <i className="icon_mail_alt"></i>
                <h3>Change your email</h3>
                <p>
                    Mussum ipsum cacilds, vidis litro abertis.
                </p>
            </div>
            <div className="wrapper_indent">
                <div className="form-group">
                    <label>Old email</label>
                    <input className="form-control" name="old_email" id="old_email" type="email" />
                </div>
                <div className="form-group">
                    <label>New email</label>
                    <input className="form-control" name="new_email" id="new_email" type="email" />
                </div>
                <div className="form-group">
                    <label>Confirm new email</label>
                    <input className="form-control" name="confirm_new_email" id="confirm_new_email" type="email" />
                </div>
                <button type="submit" className="btn_1 green">Update Email</button>
            </div>


        </>
    )
}

export default CambiarCorreo
