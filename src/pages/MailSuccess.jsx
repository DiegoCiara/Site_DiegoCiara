import { AiFillCheckCircle } from 'react-icons/ai';
import { useEffect } from 'react';

export function MailSuccess() {
  useEffect(() => {
    // Use setTimeout para redirecionar após 3 segundos
    const redirectTimer = setTimeout(() => {
      window.location.replace('/'); // Redirecione para a página inicial "/"
    }, 2500); // 3000 milissegundos = 3 segundos

    // Lembre-se de limpar o temporizador ao desmontar o componente
    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="Container">
      <div>
        <AiFillCheckCircle style={{ fontSize: '150px', color: '#00e5a0', backgroundColor: '#ffff', borderRadius: '50%' }} />
        <h2>E-mail enviado com sucesso</h2>
        <span style={{ fontSize: '10px' }}>Aguarde para ser redirecionado...</span>
      </div>
    </div>
  );
}
