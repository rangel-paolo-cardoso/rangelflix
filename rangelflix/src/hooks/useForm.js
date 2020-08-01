import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [values, setValues] = useState(valoresIniciais);
  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = ({ target: { name, value } }) => setValue(name, value);

  const clearForm = () => setValues(valoresIniciais);

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;
