/* ============================================================
   SUNNA — documentação
   Uma única tarefa: quando o rail está na forma de barra
   horizontal (abaixo de 860px), trazer o item da página
   corrente para dentro do campo de visão. Sem isso, a partir
   da terceira página você deixa de ver onde está.

   Roda no 'load', não no 'defer': a folha de estilo externa
   precisa já ter aplicado o layout de barra, senão a medida
   de largura abaixo lê o rail ainda na forma de coluna e a
   função desiste antes de fazer qualquer coisa.

   Rolagem instantânea de propósito: isto é orientação, não
   animação decorativa — não há o que degradar sob
   prefers-reduced-motion.
   ============================================================ */
window.addEventListener('load', function () {
  var current = document.querySelector('.rail__link[aria-current="page"]');
  if (!current) return;

  var rail = current.closest('.rail');
  if (!rail) return;

  // Só quando o rail realmente rola na horizontal, isto é, na forma de barra.
  if (rail.scrollWidth <= rail.clientWidth) return;

  current.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
});
