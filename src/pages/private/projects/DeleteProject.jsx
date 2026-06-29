import React, { useState } from "react";
import Button from "../../../components/common/Button";
import projectService from "../../../api/services/projectService";
export default function DeleteProject({ id }) {
  const [apiError, setApiError] = useState(null);

  // Delete existing project
  const handleDelete = async (e) => {
    try {
      setApiError(null);
      await projectService.delete(id);
    } catch (err) {
      const apiErrors = err.response?.data;
      setApiError(apiErrors || "Project removal failed");
    }
  };
  return (
    <Button
      text={"Delete"}
      arrow="false"
      btnfunction={handleDelete}
      type="submit"
      cn="delete-btn"
    ></Button>
  );
}
