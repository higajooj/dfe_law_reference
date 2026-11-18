<!-- p.19 -->

# 2.15 Inserção do grupo de informações relativas às operações de condomínios

Considerando a previsão contida no art. 26, § 2º, inciso I, da Lei Complementar nº 214/2025, foram incorporadas ao layout da NFS-e de padrão nacional evoluções que possibilitarão emissão do documento fiscal para formalização das operações de condomínios relacionadas aos respectivos rateios de despesas.

Além das operações previstas e contempladas na Nota Técnica SE/CGNFS-e nº 005, fatos geradores do IBS/CBS, mas não do Imposto Sobre Serviço de Qualquer Natureza – ISSQN, foi criado código específico para essa nova operação. Importante frisar que essa nova operação se submeterá às mesmas diretrizes conceituais e operacionais detalhadas no tópico 3.a) da Nota Técnica SE/CGNFS-e nº 007: emissão exclusiva pelos emissores públicos nacionais e todas as pessoas jurídicas autorizadas a emitir.

Dessa forma, para identificação específica dessas operações, será incluído o código “99.05.01 – Operações Condominiais (taxas e demais valores cobrados pelo condomínio edilício, desde que não caracterizem operações enquadradas em outros códigos de tributação nacional da NFS-e)” na tabela de classificação de operações da NFS-e, conforme destacado abaixo. A utilização desse código permitirá o adequado tratamento das informações decorrentes dos rateios condominiais previstos na legislação tributária vigente.

| Código | Descrição |
|---|---|
| 99.01.01 | Outros serviços sem a incidência de ISSQN e ICMS. |
| 99.02.01 | Operações com Bens Imateriais Não Classificados em Itens Anteriores |
| 99.03.01 | Locação de Bens Imóveis |
| 99.03.02 | Cessão Onerosa de Bens Imóveis |
| 99.03.03 | Arrendamento de Bens Imóveis |
| 99.03.04 | Servidão, Cessão de Uso ou de Espaço de Bens Imóveis (quando não caracterizem operações tributáveis pelo ISSQN) |
| 99.03.05 | Permissão de Uso ou Direito de Passagem de Bens Imóveis (quando não caracterizem operações tributáveis pelo ISSQN) |
| 99.04.01 | Locação de Bens Móveis |
| **99.05.01** | **Operações Condominiais (taxas e demais valores cobrados pelo condomínio edilício, desde que não caracterizem operações enquadradas em outros códigos de tributação nacional da NFS-e)** |

<!-- p.20 -->

Dessa forma, evidenciou-se a necessidade de criação de grupo específico e exclusivo a ser informado nos documentos fiscais que formalizarão essas operações com o objetivo de permitir a sua discriminação através de tipos de cobranças aplicáveis.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **condominios** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas às operações de condomínios.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/ | dVencOrig | E | D | 1-1 | - | Data de vencimento original. Ano, Mês e Dia (AAAA-MM-DD) (Informar a data de vencimento original das taxas e demais valores condominiais cobrados do condômino) |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/** | **gCobranca** | **G** | **-** | **1-20** | **-** | **Grupo de informações das cobranças das taxas e demais valores condominiais cobrados do condômino.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/ | tpCobranca | E | N | 1-1 | 2 | 01 - Condomínio Ordinário;<br>02 - Condomínio Privativo;<br>03 - Fundo De Promoção E Propaganda (FPP);<br>04 - Impostos e Taxas;<br>05 - Fundo de Reserva;<br>99 - Outra Cobrança |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/ | xTpCobranca | E | C | 0-1 | 1-150 | Descrição do tipo da cobrança. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/ | vCobranca | E | N | 1-1 | 1-15V2 | Valor da cobrança em R$. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/** | **gDetCobranca** | **G** | **-** | **0-20** | **-** | **Grupo de informações relativas ao detalhamento das cobranças.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/gDetCobranca/ | tpDetCobranca | E | N | 1-1 | 3 | 001 - Cond. Comum CRD;<br>002 - Cond. Comum M2;<br>003 - Cond. Comum Fixo;<br>004 - Cond. Comum Fração;<br>005 - Cond. Comum Percentual;<br>006 - Condomínio CMM;<br>007 - Energia Elétrica;<br>008 - Água;<br>009 - Ar Condicionado;<br>010 - Telefone;<br>011 - Internet;<br>012 - Controle de Pragas;<br>013 - Exaustão;<br>014 - Gás;<br>015 - IPTU;<br>016 - Taxa Área;<br>017 - Manutenção;<br>018 - Multa;<br>019 - Seguro;<br>020 - Taxa Bombeiro;<br>021 - Taxa Administração;<br>022 - Taxa Foro;<br>023 - Limpeza;<br>024 - Taxa de Lixo;<br>025 - Tapume;<br>026 - Instalação Alarme;<br>027 - Segurança;<br>028 - Fundo de Promoção e Propaganda;<br>029 - Análise de Projeto;<br>030 - Fundo de Reserva;<br>031 - Laudos e Vistorias;<br>032 - Detecção de Fumaça;<br>033 - Reanálise de Projeto;<br>034 - Taxa Extra;<br>035 - Área Vaga;<br>036 - Condomínio Irrecuperável;<br>999 - Outro |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/gDetCobranca/ | xTpDetCobranca | E | C | 0-1 | 1-150 | Descrição do tipo de detalhamento da cobrança. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gCobranca/gDetCobranca/ | vDetCobranca | E | N | 1-1 | 1-15V2 | Valor detalhado da cobrança em R$ que irá compor vCobranca. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/** | **gDesconto** | **G** | **-** | **0-10** | **-** | **Grupo de informações dos descontos concedidos das taxas e demais valores condominiais cobrados do condômino.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gDesconto/ | tpDesconto | E | N | 1-1 | 1 | 1 - Desconto Incondicionado;<br>2 - Desconto Condicionado |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gDesconto/ | vDesconto | E | N | 1-1 | 1-15V2 | Valor do desconto em R$. |

<!-- p.21 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/condominios/gDesconto/ | xTpDesconto | E | C | 1-1 | 1-150 | Descrição do tipo do desconto aplicado pelo Condomínio. |

Nesse sentido, foram realizadas as seguintes atualizações nas fórmulas dos campos “vServ”, “vDescIncond” e “vDescCond”, bem como nas respectivas regras de negócio:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/valores/vServPrest/ | vServ | E | N | 1-1 | 1-15V2 | Valor monetário do serviço (R$).<br><br>OBS1: Para os códigos de tributação nacional do subitem 99.03 (locações e equiparados), vServ = pCopropriedade x vTotOper.<br><br>OBS2: Para os códigos de tributação nacional do subitem 99.05 (condomínios), vServ = ∑ vCobranca. |
| NFSe/infNFSe/DPS/infDPS/valores/vDescCondIncond/ | vDescIncond | E | N | 0-1 | 1-15V2 | Valor monetário do desconto incondicionado (R$).<br><br>OBS1: Para os códigos de tributação nacional do subitem 99.03, vDescIncond = pCopropriedade x vDescIncondTot.<br><br>OBS2: Para os códigos de tributação nacional do subitem 99.05 (condomínios), vDescIncond = ∑ vDesconto do tipo (tpDesconto) 1 - Desconto Incondicionado. |
| NFSe/infNFSe/DPS/infDPS/valores/vDescCondIncond/ | vDescCond | E | N | 0-1 | 1-15V2 | Valor monetário do desconto condicionado (R$).<br><br>OBS1: Para os códigos de tributação nacional do subitem 99.03, vDescCond = pCopropriedade x vDescCondTot.<br><br>OBS2: Para os códigos de tributação nacional do subitem 99.05 (condomínios), vDescCond = ∑ vDesconto do tipo (tpDesconto) 2 - Desconto Condicionado. |

Por último, foi incluída a regra de negócio que trata da obrigatoriedade da informação do grupo “imovel” quando o serviço informado for relacionado a operações de condomínios.
