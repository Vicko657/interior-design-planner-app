import React, { useState } from "react";
import Button from "../../../components/common/Button";
import taskService from "../../../api/services/taskService";
export default function DeleteTask({ id }) {
  const [apiError, setApiError] = useState(null);

  // Delete existing task
  const handleDelete = async (e) => {
    try {
      setApiError(null);
      await taskService.delete(id);
    } catch (err) {
      const apiErrors = err.response?.data;
      setApiError(apiErrors || "Task removal failed");
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
