const Auth = () => {
    const onSubmit = ()=>{};
  return (
    <div className="background">
      <form onSubmit={} className="form-card">
        <div className="form-title">Bem-Vindo!!</div>
        <div className="form-subTitle">
          Informe o nome de usuário para continuar
        </div>
        <div className="auth">
          <div className="auth-label"> Username </div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
