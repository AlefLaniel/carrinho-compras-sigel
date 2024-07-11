import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
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
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className="text-sm text-red-500">{error}</label>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <label className="text-[16px] text-[#676767]">
          Já tem uma conta?
          <strong className="cursor-pointer">
            <Link className="text-[#676767]" to="/">&nbsp;Entre</Link>
          </strong>
        </label>
      </div>
    </div>
  );
};

export default Signup;
