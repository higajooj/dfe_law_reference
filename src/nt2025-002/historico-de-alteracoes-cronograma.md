<!-- p.4 -->
# Histórico de Alterações / Cronograma

| Versão | Histórico de atualizações | Implantação Teste | Implantação Produção |
|---|---|---|---|
| **1.01** | Inserção de campos de controle e criação de eventos para utilização na apuração do IBS, CBS e IS | 01/07/2025 | ~~01/10/2025~~ |
| **1.01** | Aplicação das Regras de Validação | 01/07/2025 | ~~01/2026~~ |
| **1.10\*\*** | Implantação de novo schema com os campos para apuração do IBS, CBS e IS, com preenchimento opcional, conforme detalhamento do cronograma abaixo. | De 07/07/2025<br>até 28/07/2025\* | ~~06/10/2025~~ |
| **1.10\*\*** | Aplicação das regras de validação, conforme detalhamento do cronograma abaixo. | De 07/07/2025<br>até 11/08/2025\* | ~~06/10/2025~~ |
| **1.10** | Implantação dos eventos para utilização na apuração do IBS, CBS e IS. | 25/08/2025\*\*\* | ~~06/10/2025~~ |
| **1.20** | Detalhamentos do cronograma, novas regras de validação e ajustes diversos. | 08/09/2025 | ~~06/10/2025~~ |
| **1.30** | Entrada do schema, das Regras de Validação e dos Eventos, com exceção das Regras de Validação listadas no item a seguir. | Até 29/10/2025 | 10/11/2025 |

> **Revogado/Descontinuado:** texto riscado no original (trecho(s) desta tabela).

<!-- p.5 -->
| Versão | Histórico de atualizações | Implantação Teste | Implantação Produção |
|---|---|---|---|
| **1.30** | Entrada das seguintes Regras de Validação: B10a-10, B10a-20, B10a-30, B10a-40, B10a-50, B25-110, B25-120, I05k-10, I05k-20, UB112-10, UB112-20, UB112-30, UB116-10, UB116-20, UB116-30, UB120-10, UB120-20, UB122-10, UB123-10, UB123-20, UB125-10, UB126-10, UB127-10, UB127-20, UB129-10, UB130-10, UB131-10, UB131-20, UB131-30, UB131-40, UB131-50, UB132-10, UB133-10, W59f-10, W59g-10 | Até 24/11/2025 | 02/02/2026 |
| **1.30** | Início da obrigatoriedade da informação dos novos tributos (RV UB12-10) | Implementação futura | Implementação futura |
| **1.31** | Correção nas regras de validação B25-80, B25-90, B25-100, Q01-20, S01-20, UB56-10 e VC02-30.<br>Inclusão de observação explicativa nas regras de validação UB27-10, UB46-10 e UB65-10, sem impacto nas validações. | Até 14/11/2025 | 17/11/2025 |
| **1.32** | Correção nas regras de validação B25b-20, 3BA02-10, 3BA02-70 e NA01-20. | Até 01/12/2025 | 04/12/2025 |
| **1.33** | Correção na regra de validação UB56-10, permitindo alíquota zero para a CBS em operações específicas dentro de áreas incentivadas.<br>Ajuste para permitir a informação do grupo de Redução de Alíquota (gRed) somente quando a alíquota for maior que zero (regras de validação: UB26-15, UB26-20, UB45-15, UB45-20, UB64-15 e UB64-20).<br>Alteração da data de início da aplicação da regra de validação UB12-10. | Até 10/12/2025 | Até 15/12/2025 |
| **1.34** | Regras de validação desabilitadas: UB26-15, UB45-15 e UB64-15.<br>Regras de validação alteradas: UB26-20, UB45-20, e UB64-20. | Até 10/12/2025 | Até 15/12/2025 |
| **1.35** | Regras de validação alteradas: UB13-40, UB84a-10, UB90-10, UB94-10, UB99-10. | Até 06/04/2026 | Não se aplica |
| **1.36** | Regras de validação incluídas: I08-141.<br>Regras de validação alteradas: I08-140, I08-144, VC02-07, VC02-10, UB18-10, UB37-10, UB56-10, B25-80.<br>Criação de novo tipo de nota de crédito: 06=Retorno por recusa parcial na entrega. | Até 01/07/2026 | 03/08/2026 |
| **1.40** | Criação do campo para o Código Indicador do Local da Operação de Fornecimento (cIndOp, B25d);<br>Atualização de valores de tpEnteGov (BB02), tpOperGov (BB04) e criação do campo refDFeAnt (BB05);<br>Criação do campo para Inscrição Suframa do Emitente (ISUFemit, C22);<br>Atualização dos grupos de devolução de tributos (gDevTrib) - cashback;<br>Criação do grupo gALCZFMCBS (UB66a);<br>Validações por cClassTrib x tipo de nota de débito e crédito;<br>Alteração da data de início da aplicação da regra de validação UB12-10.<br>Ajuste no layout do Evento 211110;<br>Eliminação do Evento 211120;<br>Regras de validação incluídas: B25d-10, B25d-20, B25d-30, BB05-10, BB05-20, BB05-30, BB05-40, BB05-50, BB05-60, BB05-70, BB05-80, BB05-90, BB05-100, BB05-110, BB05-120, BB05-130, BB05-140, BB05-150, BB05-160, BB05-170, BB05-180, BB05-190, BB05-200, C22-10, C22-20, UB14-60, UB14-70, UB14-80, UB24-10, UB43-10, UB56-20, UB62-10, UB62a-10, UB63-10, UB66a-10, UB66a-20, UB66c-10, UB66e-10, VC02-40, VC02-50, VC03-20;<br>Regras de validação alteradas: B10a-30, BB02-10, E18-30, UB26-20, UB45-20, UB56-10, UB64-20, UB82a-10, UB123-10, UB127-10, UB133-10, VB01-05, VB01-10, VB01-20, VC02-15, W07-10, UB12-10. | Até 01/07/2026 | 03/08/2026 |

<!-- p.6 -->
| Versão | Histórico de atualizações | Implantação Teste | Implantação Produção |
|---|---|---|---|
| **1.40** | Na devolução, o referenciamento passa a ser realizado exclusivamente no grupo “DFeReferenciado” (regra de validação VC02-14) | Até 01/07/2026 | ~~01/09/2026~~<br>05/10/2025 |
| **1.50** | Reformulação do layout da tributação monofásica de combustíveis e regras de validação | Até 01/09/2026 | 03/11/2026 |
| **1.51** | Alteração de regras de validação: UB13-30, UB13-40, UB18-10, UB22-20, UB26-20, UB37-10, UB40-10, UB45-20, UB56-20, UB59-10, UB64-20; B25-80, I08-140, I08-144, UB13-20, UB13-40, UB22-10, UB40-20, UB45-10, UB56-10, UB59-20, UB64-10, UB66a-20, UB82a-30, UB112-10, UB116-10, UB131-20, VC02-14, VC02-30. | Até 01/09/2026 | 05/10/2026 |
| **1.51** | Alteração do cronograma de implantação das regras de validação UB12-10 | Até 03/08/2026 | 03/08/2026 |

> **Revogado/Descontinuado:** texto riscado no original (trecho(s) desta tabela).

\* Implantação em homologação pode variar por UF neste período.

\*\* As regras de validação serão aplicadas exclusivamente nos documentos fiscais que contenham o preenchimento dos campos referentes ao Imposto sobre Bens e Serviços (IBS), à Contribuição sobre Bens e Serviços (CBS) e ao Imposto Seletivo (IS). Isso significa que, se esses campos não estiverem preenchidos, as validações específicas para o IBS, CBS e IS não serão executadas.

\*\* A validade jurídica das informações dos novos tributos se dará conforme os prazos estabelecidos na legislação, independentemente de já estarem preenchidos.

\*\*\* O schema dos novos Eventos será disponibilizado até dia 11/08/2025.
