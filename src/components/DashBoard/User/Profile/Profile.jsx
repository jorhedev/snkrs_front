import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { readCookieSession } from "../../../../services";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import { fetchUserById, updateUser, selectUser } from "../../../../redux/user";
import Swal from "sweetalert2";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("Información del usuario:", user);

  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({});

  const calculateProfileCompletion = (user) => {
    const totalFields = 10;
    const fieldsToConsider = [
      "firstName",
      "lastName",
      "email",
      "birthday",
      "country",
      "state",
      "city",
      "address",
      "phone",
    ];

    const filledFields = fieldsToConsider.reduce((count, field) => {
      if (user[field] && user[field].length > 0) {
        return count + 1;
      }
      return count;
    }, 0);

    const profileCompletion = (filledFields / totalFields) * 100;
    return profileCompletion;
  };

  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const { image, ...userData } = user;
      setImageUrl(image);
    }
  }, [user]);

  const handleEditClick = () => {
    console.log("isEditing se ha cambiado a true");
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log("Save button clicked");
    if (Object.keys(updatedFields).length > 0) {
      console.log("Updated Fields:", updatedFields);
      dispatch(updateUser(updatedFields));
    }
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // setUpdatedFields({});
    console.log("isEditing se ha cambiado a false");

    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedFields({
      ...updatedFields,
      [name]: value,
    });
  };

  const handleProfilePictureClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    };
    input.click();
  };
  const profileCompletion = calculateProfileCompletion(user);

  return (
    <div className={styles.userProfile}>
      <div className={styles.progress}>
        <span className={styles.progressMessage}>
          {profileCompletion === 100
            ? "Perfil Completo"
            : `Perfil ${profileCompletion.toFixed(
                0
              )}% completado, por favor completa los campos faltantes`}
        </span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${profileCompletion}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.userImage}>
        <img className={styles.userImage} src={imageUrl} alt="User Image" />
        <button className={styles.btn} onClick={handleProfilePictureClick}>
          <FaPlus className={styles.plus}/>
        </button>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.field}>
          <label className={styles.label}>First Name:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="firstName"
            value={user.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Last Name:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="lastName"
            value={user.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Birthday:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="date"
            name="birthday"
            value={user.birthday || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Country:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="country"
            value={user.country || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>State:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="state"
            value={user.state || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>City:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="city"
            value={user.city || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Address:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="address"
            value={user.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Phone:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
          />
        </div>
        {isEditing ? (
          <div className={styles.editButtons}>
            <button className={styles.buttonSave} onClick={handleSaveClick}>
              Save
            </button>
            <button className={styles.buttonCancel} onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        ) : (
          <button className={styles.buttonEdit} onClick={handleEditClick}>
            <FaRegEdit />
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
