import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { readCookieSession } from "../../../../services";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import { fetchUserById, updateUser, selectUser } from "../../../../redux/user";
import Swal from "sweetalert2";
import moment from "moment";
import { MAX_YEAR_REGISTER, MIN_YEAR_REGISTER } from "../../../../const";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("Información del usuario:", user);

  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    country: "",
    state: "",
    city: "",
    address: "",
    phone: "",
  });

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);


  useEffect(() => {
    if (user) {
      const { image, ...userData } = user;
      const userBirthday = moment.utc(user.birthday).format("YYYY-MM-DD")
      setImageUrl(image);
      setUpdatedFields({...updatedFields, 
        firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          birthday: userBirthday,
            country: user?.address?.[0]?.country  || "" ,
            state: user?.address?.[0]?.state || "",
            city: user?.address?.[0]?.city || "",
            address: user?.address?.[0]?.address || "",
            phone: user?.address?.[0]?.phone || "",
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleEditClick = () => {
    console.log("isEditing se ha cambiado a true");
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log("Save button clicked");
    if (Object.keys(updatedFields).length > 0) {
      console.log("Updated Fields:", updatedFields);
      dispatch(
        updateUser({
          firstName: updatedFields.firstName,
          lastName: updatedFields.lastName,
          email: updatedFields.email,
          birthday: updatedFields.birthday,
          address: {
            country: updatedFields.country ,
            state: updatedFields.state  ,
            city: updatedFields.city ,
            address: updatedFields.address ,
            phone: updatedFields.phone ,
          },
        })
      );
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
          <FaPlus className={styles.plus} />
        </button>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.field}>
          <label className={styles.label}>First Name:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="firstName"
            value={updatedFields.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Last Name:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="lastName"
            value={updatedFields.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="email"
            name="email"
            value={updatedFields.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Birthday:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="date"
            name="birthday"
            min={MIN_YEAR_REGISTER}
            max={MAX_YEAR_REGISTER}
            value={updatedFields.birthday || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Country:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="country"
            value={updatedFields.country || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>State:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="state"
            value={updatedFields.state || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>City:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="city"
            value={updatedFields.city || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Address:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="address"
            value={updatedFields.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Phone:</label>
          <input
            className={`${styles.input} ${isEditing ? styles.edit : ""}`}
            type="text"
            name="phone"
            value={updatedFields.phone || ""}
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
