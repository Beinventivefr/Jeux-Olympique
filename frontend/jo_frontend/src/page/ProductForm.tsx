import React, { useEffect, useContext, useState, ChangeEvent, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jsonContext from "../context/JsonContext";

interface Category { id: number; wording: string; }
interface FormControlElement extends HTMLInputElement { value: string; }

export default function ProductForm() {
const [wording, setWording] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [picture, setPicture] = useState<File | undefined>(undefined);
const [categories, setCategories] = useState<Category[]>([]);
const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);
const [error, setError] = useState("");
const navigate = useNavigate();

const handleWording = (event: ChangeEvent<HTMLInputElement>) => setWording(event.target.value);
const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value);
const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => setPrice(event.target.value);
const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) setPicture(file);
};
const handleCategoryChange = (event: ChangeEvent<FormControlElement>) => setSelectedCategoryId(parseInt(event.target.value));

useEffect(() => {
    const { VITE_SERVER_ADDRESSES } = import.meta.env;
    axios.get<Category[]>(`${VITE_SERVER_ADDRESSES}/api/categories/`).then((response) => setCategories(response.data)).catch((error) => setError(error.message));
}, []);

const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const productFormData = new FormData();
    productFormData.append("wording", wording);
    productFormData.append("description", description);
    productFormData.append("price", price);
    if (picture) productFormData.append("picture", picture);
    productFormData.append("category", selectedCategoryId?.toString() || "");

    try {
        const { VITE_SERVER_ADDRESSES } = import.meta.env;
        await axios.post(`${VITE_SERVER_ADDRESSES}/api/products/`, productFormData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            alert("Mot de passe")
            navigate("/Catalogue");
        })
    } catch (error: unknown) {
        setError((error as Error).message);
    }
};

return (
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formProductLabel">
                    <Form.Label>Libellé</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le libellé du produit" value={wording} onChange={handleWording} />
                </Form.Group>

                <Form.Group controlId="formProductDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Entrer la description du produit" value={description} onChange={handleDescriptionChange} />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le prix du produit" value={price} onChange={handlePriceChange} />
                </Form.Group>

                <Form.Group controlId="formProductImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={handleImageUpload} />
                </Form.Group>

        </Form>
)

}
