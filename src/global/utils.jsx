export function SendWhatsApp(props){
  // Sempre substituir os espaços por %20 para identificação na URL
  return(
    <>{`https://api.whatsapp.com/send?phone=${props.phone}&text=${props.message}`}</>
  )
}