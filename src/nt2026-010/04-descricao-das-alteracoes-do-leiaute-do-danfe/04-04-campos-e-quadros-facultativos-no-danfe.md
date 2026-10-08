# 4.4. Campos e quadros facultativos no DANFE

O DANFE poderá conter quadros e campos de exibição facultativa ou condicionada. Quando a informação correspondente não existir no XML, ou quando o grupo não se aplicar à operação, o campo não deverá ser preenchido. Nos modelos desta NT, esses campos e quadros estão identificados em azul e com borda tracejada.

A faculdade de exibição não autoriza a criação, inferência ou impressão de informação inexistente no XML. Para os quadros cuja supressão já é prevista no MOC, permanecem aplicáveis as regras de aproveitamento do espaço previstas no Manual do DANFE.

<!-- p.6 -->
| Quadro / campo facultativo | Tag (XML) — ID | Condição / referência |
|---|---|---|
| Canhoto | Sem tag própria | Pode ser suprimido quando o emitente não utilizar o bloco de canhoto. |
| Tipo de Regime de Apuração do IBS e da CBS | Sem tag/ID publicada | Campo reservado. Não imprimir conteúdo enquanto não houver definição da origem da informação. |
| Fatura / Duplicatas | cobr – Y01; dup – Y07; nDup – Y08; dVenc – Y09; vDup – Y10 | Pode ser suprimido quando o contribuinte não utilizar esses documentos. |
| Valor do FCP | vFCP – W04h | Exibição condicionada à existência/aplicabilidade da informação no XML. |
| Valor do FCP retido por ST | vFCPST – W06a | Exibição condicionada à existência/aplicabilidade da informação no XML. |
| Valor do DIFAL na UF de destino | vICMSUFDest – W04e | Exibição condicionada à existência da informação no XML. |
| Valor do FCP na UF de destino | vFCPUFDest – W04c | Exibição condicionada à existência da informação no XML. |
| BC (quantidade) do ICMS monofásico | qBCMono – W06b.1 | Base quantitativa da tributação monofásica. |
| Valor do ICMS monofásico | vICMSMono – W06c | Exibição condicionada à existência da informação no XML. |
| BC (quantidade) do ICMS monofásico por retenção | qBCMonoReten – W06c.1 | Base quantitativa sujeita à retenção na monofasia. |
| Valor do ICMS monofásico por retenção | vICMSMonoReten – W06d | Exibição condicionada à existência da informação no XML. |
| Valor do IBS monofásico | vIBSMono – W58 | Exibir quando informado o grupo de monofasia (gMono – W57). |
| Valor da CBS monofásica | vCBSMono – W59 | Exibir quando informado o grupo de monofasia (gMono – W57). |
| Valor do IBS monofásico por retenção | vIBSMonoReten – W59a | Exibir quando houver tributação monofásica sujeita a retenção. |
| Valor da CBS monofásica por retenção | vCBSMonoReten – W59b | Exibir quando houver tributação monofásica sujeita a retenção. |
| Cálculo do ISSQN | IM – C19; ISSQNtot – W17; vServ – W18; vBC – W19; vISS – W20 | Pode ser suprimido quando não se aplicar às operações do emitente, conforme o MOC. |
| Transportador / Volumes Transportados | transp – X01; modFrete – X02 e campos do Grupo X | No modelo proposto, a exibição detalhada fica condicionada à existência de dados de transporte/volumes a apresentar. |
| QR Code | qrCode – ZX02 | No modelo proposto, a exibição detalhada fica condicionada à existência de dados de QR Code. |
