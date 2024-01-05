import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { foodData } from '../../interface/FoodData';

import "./modal.css";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} value={value} onChange={event => updateValue(event.target.value)} />
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, status } = useFoodDataMutate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const foodData: foodData = {
      title,
      price,
      image
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (isSuccess) closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container" onSubmit={handleSubmit}>
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="price" value={price} updateValue={setPrice} />
          <Input label="image" value={image} updateValue={setImage} />
          <button type="submit" className="btn-secondary">
            {status === "loading" ? "postando..." : "postar"}
          </button>
        </form>
      </div>
    </div>
  );
}