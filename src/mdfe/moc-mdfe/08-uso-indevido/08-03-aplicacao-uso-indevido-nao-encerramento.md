<!-- p.71 -->
# 8.3 Aplicação de Uso Indevido para rejeições relacionadas ao não encerramento do MDFe

O não encerramento do MDFe no momento em que é concluído o descarregamento acarreta uma série de problemas operacionais para os controles de trânsito das Secretarias de Fazenda.

Percebe-se que algumas aplicações de contribuintes estão programadas para encerrar o MDFe somente quando recebem uma das seguintes rejeições de bloqueio:

- 462 - Existe MDFe não encerrado há mais de 5 dias para placa com até 2 UF de percurso informadas
- 610 - Rejeição: Existe MDFe não encerrado para esta placa, UF carregamento e UF descarregamento em data de emissão diferente
- 611 - Rejeição: Existe MDFe não encerrado para esta placa, tipo de emirtente e UF descarregamento
- 686 - Rejeição: Existe MDFe não encerrado há mais de 30 dias para o emitente

Essa prática é facilitada pela devolução da chave de acesso e protocolo causadores do bloqueio no retorno das rejeições.

O sistema de autorização irá suprimir esse complemento indicativo de chave e protocolo na mensagem de retorno para o CNPJ que receber mais de 5 rejeições de um destes tipos (462, 610, 611, 686) dentro do intervalo de uma hora.

Cada vez que a empresa ultrapassar a cota de 5 rejeições desta natureza, terá aplicada a punição pelo período de uma hora a partir da sexta rejeição.
