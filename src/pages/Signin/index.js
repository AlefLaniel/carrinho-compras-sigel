import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center flex-col gap-3 h-[100vh] bg-yellow-300">
      <label className="text-lg font-semibold text-[#676767]">SISTEMA DE LOGIN</label>
      <div className="flex items-center justify-center flex-col gap-4 w-full shadow-sm bg-white max-w-[350px] p-5 rounded-md">
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className="text-sm text-red-500">{error}</label>
        <Button Text="Entrar" onClick={handleLogin} />
        <label className="text-[16px] text-[#676767]">
          Não tem uma conta?
          <strong className="cursor-pointer">
            <Link className="text-[#676767]" to="/signup">&nbsp;Registre-se</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};

export default Signin;
