import React, { useState } from "react";
import Button from "../../../components/common/Button";
import itemService from "../../../api/services/itemService";
export default function DeleteItem({ id, index }) {
  const [apiError, setApiError] = useState(null);

  // Delete existing item
  const handleDelete = async (e) => {
    try {
      setApiError(null);
      await itemService.delete(id, index);
    } catch (err) {
      const apiErrors = err.response?.data;
      setApiError(apiErrors || "Item removal failed");
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
