<!-- p.15 -->

# 2.12 Inclusão de novos campos e atualizações do grupo de informações sobre transações entre residentes ou domiciliados no Brasil com residentes ou domiciliados no exterior (“comExt”)

Por exigência dos regulamentos do IBS e da CBS (Resolução CGIBS Nº 6, de 30 de abril de 2026, e Decreto Nº 12.955, de 29 de abril de 2026), foram criados os campos “nFatura”, “vFatura” e “nContCambio”, de forma a permitir a inclusão do número da fatura ou de documento que comprove a transação de comércio exterior, seu respectivo valor, além do número do contrato de câmbio ou documento que acobertou o pagamento da operação.

Por outro lado, foram atualizados os campos “mdPrestacao”, para incluir o domínio “5 - Consumo concomitante no território nacional e exterior”, hipótese em que será observada as seguintes regras de emissão:

- Na Importação: informar no campo “vServ” da DPS apenas a parcela consumida no país;

<!-- p.16 -->

- Na Exportação: informar no campo “vServ” da DPS apenas a parcela exportada. Nesse caso, uma outra NFS-e deve ser emitida para a parcela consumida no país (esta não se enquadrando como exportação).

Na mesma esteira, os campos “nDI” e “nRE” foram renomeados para “nDUIMP” e “nDUE”, respectivamente, visando atualizar o layout às novas terminologias aplicadas às declarações relativas ao comércio exterior.

Já o campo “tpMoeda” passará a ter validação das informações inseridas, conforme a tabela de moedas do Banco Central do Brasil.

Por fim, a partir de 01/01/2027, o domínio "Desconhecido (tipo não informado na nota de origem)" previsto atualmente em alguns campos que compõem o grupo “comExt”, p. ex. “mdPrestacao” e “vincPrest”, não será admitido nas NFS-e compartilhadas pelos municípios ao Ambiente de Dados Nacional (ADN). Todas as informações compartilhadas deverão conter valor válido dentre os domínios definidos para o respectivo campo, conforme layout vigente. A medida visa elevar a consistência, a padronização e a qualidade dos dados compartilhados nacionalmente.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/serv/** | **comExt** | **G** | **-** | **0-1** | **-** | **Grupo de informações sobre transações entre residentes ou domiciliados no Brasil com residentes ou domiciliados no exterior** |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | mdPrestacao | E | N | 1-1 | 1 | Modo de Prestação:<br>0 - Desconhecido (tipo não informado na nota de origem);<br>1 - Transfronteiriço;<br>2 - Consumo no Brasil;<br>3 - Movimento Temporário de Pessoas Físicas;<br>4 - Consumo no Exterior;<br>5 - Consumo concomitante no território nacional e exterior; |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | vincPrest | E | N | 1-1 | 1 | Vínculo entre as partes no negócio:<br>0 - Sem vínculo com o Tomador/Prestador;<br>1 - Controlada;<br>2 - Controladora;<br>3 - Coligada;<br>4 - Matriz;<br>5 - Filial ou sucursal;<br>6 - Outro vínculo;<br>9 - Desconhecido (tipo não informado na nota de origem); |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | tpMoeda | E | N | 1-1 | 3 | Identifica a moeda da transação comercial. O usuário deve informar o código da moeda. |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | nFatura | E | N | 0-1 | 1-20 | Número da identificação da fatura de serviços ou do documento que comprove a transação (DECRETO Nº 12.955, DE 29 DE ABRIL DE 2026, Art. 74 § 1º ) |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | vFatura | E | N | 0-1 | 1-15V2 | Valor total da fatura de serviços ou do documento que comprove a transação, expresso na moeda identificada em tpMoeda (DECRETO Nº 12.955, DE 29 DE ABRIL DE 2026, Art. 74, §1º). |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | mecAFComexP | E | N | 1-1 | 2 | Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo prestador do serviço:<br>00 - Desconhecido (tipo não informado na nota de origem);<br>01 - Nenhum;<br>02 - ACC - Adiantamento sobre Contrato de Câmbio – Redução a Zero do IR e do IOF;<br>03 - ACE – Adiantamento sobre Cambiais Entregues - Redução a Zero do IR e do IOF;<br>04 - BNDES-Exim Pós-Embarque – Serviços;<br>05 - BNDES-Exim Pré-Embarque - Serviços;<br>06 - FGE - Fundo de Garantia à Exportação;<br>07 - PROEX - EQUALIZAÇÃO;<br>08 - PROEX - Financiamento; |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | mecAFComexT | E | N | 1-1 | 2 | Mecanismo de apoio/fomento ao Comércio Exterior utilizado pelo tomador do serviço:<br>00 - Desconhecido (tipo não informado na nota de origem);<br>01 - Nenhum;<br>02 - Adm. Pública e Repr. Internacional;<br>03 - Aluguéis e Arrend. Mercantil de maquinas, equip., embarc. e aeronaves;<br>04 - Arrendamento Mercantil de aeronave para empresa de transporte aéreo público;<br>05 - Comissão a agentes externos na exportação;<br>06 - Despesas de armazenagem, mov. e transporte de carga no exterior;<br>07 - Eventos FIFA (subsidiária);<br>08 - Eventos FIFA;<br>09 - Fretes, arrendamentos de embarcações ou aeronaves e outros;<br>10 - Material Aeronáutico;<br>11 - Promoção de Bens no Exterior;<br>12 - Promoção de Dest. Turísticos Brasileiros;<br>13 - Promoção do Brasil no Exterior;<br>14 - Promoção Serviços no Exterior;<br>15 - RECINE;<br>16 - RECOPA;<br>17 - Registro e Manutenção de marcas, patentes e cultivares;<br>18 - REICOMP;<br>19 - REIDI;<br>20 - REPENEC;<br>21 - REPES;<br>22 - RETAERO;<br>23 - RETID;<br>24 - Royalties, Assistência Técnica, Científica e Assemelhados;<br>25 - Serviços de avaliação da conformidade vinculados aos Acordos da OMC;<br>26 - ZPE; |

<!-- p.17 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | movTempBens | E | N | 1-1 | 1 | Vínculo da Operação à Movimentação Temporária de Bens:<br>0 - Desconhecido (tipo não informado na nota de origem);<br>1 - Não;<br>2 - Vinculada - Declaração Única de Importação;<br>3 - Vinculada - Declaração Única de Exportação; |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | nDUIMP | E | C | 0-1 | 15 | Número da Declaração Única de Importação (DUIMP) |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | nDUE | E | C | 0-1 | 14 | Número da Declaração Única de Exportação (DU-E) |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | mdic | E | N | 1-1 | 1 | Indicador se a NFS-e deverá ser disponibilizada ao MDIC.<br>0 - Não enviar para o MDIC;<br>1 - Enviar para o MDIC; |
| NFSe/infNFSe/DPS/infDPS/serv/comExt/ | nContCambio | E | N | 0-1 | 1-20 | Número da identificação do contrato de câmbio ou do documento que comprove o pagamento (Art. 74, § 1º, do DECRETO Nº 12.955, DE 29 DE ABRIL DE 2026, que Regulamenta a Contribuição Social sobre Bens e Serviços – CBS e dá outras providências.) |
