<!-- p.3 -->
# 1. Histórico de Alterações / Cronograma

| Versão | Histórico de atualizações | Implantação teste | Implantação produção |
|---|---|---|---|
| 1.00 | Versão inicial desenvolvida pelo Serpro | | 01/2014 |
| 1.01 | Acertos sugeridos pelo grupo XML | | 08/2014 |
| 1.02 | Inclusão para distribuição dos Eventos: Registro de Passagem, Pedido de Prorrogação/Cancelamento do prazo de suspensão do ICMS nas remessas enviadas para industrialização e os demais Eventos de Resposta do Fisco;<br>Possibilidade de consulta ao Web Service para uma chave de acesso de NF-e informada;<br>Distribuição do Evento de Cancelamento para o destinatário independente de sua manifestação | | 10/2016 |
| 1.02b | Inclusão da distribuição dos Eventos de Averbação | | 05/2017 |
| 1.02c | Inclusão da distribuição do Evento de Comprovante de Entrega propagado do CT-e | 16/09/2020 | 30/09/2020 |
| 1.02d | Melhorias na documentação:<br>– Esclarecer melhor o que é disponibilizado nos 3 tipos de consultas: chave de acesso (consChNFe), Distribuição NSU (distNSU) e NSU Pontual (consNSU);<br>– Detalhar as situações que se enquadram como “Uso indevido”;<br>– Retirar remissões desatualizadas; | 03/2021 | 03/2021 |
| 1.10 | Informa alteração na geração de NSU para otimizar a distribuição de NF-e e eventos.<br>Atualiza a tabela de distribuição incluindo o evento de comprovante de entrega da NF-e previsto na NT 2021.001, que já está sendo distribuído em homologação desde 01/06/2021 e em produção desde 22/06/2021. | 01/11/2021 | 08/11/2021 |
| 1.11 | Atualiza datas de homologação e produção da alteração na geração de NSU para otimizar a distribuição de NF-e e eventos.<br>Melhorias na documentação. | 03/11/2021 | 10/11/2021 |
| 1.12 | Atualiza regras de classificação como Uso Indevido (Divulgação antecipada das novas regras em 04/03/22 – no “Informes” – Portal da NF-e – www.fazenda.gov.br. | 09/03/2022 | 10/03/2022 |
| 1.13 | Disponibilização de eventos do Fisco para emitente e destinatário iguais | 09/12/2021 | 09/12/2021 |
| 1.14 | Retorno do ultNSU na rejeição 656 com consulta “distNSU” | 24/03/2022 | 24/03/2022 |
| 1.15 | Retorno de NSU tornado facultativo | 24/05/2022 | 21/06/2022 |
| 1.20 | Inclusão do evento “Ator Interessado” | 20/05/2024 | 03/06/2024 |
| 1.21 | Correção na documentação do evento “Ator Interessado” | 20/05/2024 | 03/06/2024 |
| 1.30 | Inclusão dos eventos “Insucesso da Entrega na NF-e” e “Insucesso na Entrega do CT-e propagado para NF-e” | 30/09/2024 | 30/09/2024 |
| 1.40 | Alteração de “N” para “C” nos campos “CNPJ” visando adequar ao CNPJ alfanumérico. | 08/07/2026 | 08/07/2026 |

<!-- p.4 -->
# 2. Resumo

Um dos grandes desafios do projeto Nota Fiscal Eletrônica é prover para os atores envolvidos nos processos da NF-e informações de seu interesse de forma eficiente e confiável.

Esta nota técnica tem como objetivo regulamentar e informar sobre o uso do *Web Service* denominado NFeDistribuicaoDFe, que disponibiliza para os atores da NF-e informações e documentos fiscais eletrônicos de seu interesse. A distribuição é realizada, conforme outras regras informadas neste documento, para emitentes, destinatários, transportadores e terceiros informados no conteúdo da NF-e, respectivamente no grupo do Emitente (tag: emit, id: C01), no grupo do Destinatário (tag: dest, id: E01), no grupo do Transportador (tag: transporta, id: X03) e no grupo de pessoas físicas autorizadas a acessar o XML (tag: autXML, id: GA01).

