const MATRIZ=Object.freeze({
  principal:Object.freeze(['ler','criar','editar','excluir']),
  espelho:Object.freeze(['ler']),
  offline:Object.freeze(['ler','criar-rascunho'])
});
export function capacidades(modo) {return [...(Object.hasOwn(MATRIZ,modo)?MATRIZ[modo]:[])];}
/** Server-side intersection: mode never grants permissions missing from identity. */
export function permitido({modo,acao,permissoes=[]}={}) {
  if(!Array.isArray(permissoes))return false;
  return capacidades(modo).includes(acao)&&permissoes.includes(acao);
}
export function exigir(contexto) {
  if(!permitido(contexto)){const e=new Error('Operation denied');e.code='ACESSO_NEGADO';throw e;}
  return true;
}
