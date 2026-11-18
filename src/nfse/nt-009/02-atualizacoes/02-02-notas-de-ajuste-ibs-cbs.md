<!-- p.03 -->

# 2.2 Notas de Ajuste de IBS/CBS

- Atualizações nas ocorrências (coluna “OCOR.”) de alguns grupos e campos para contemplar as possibilidades de notas de ajuste (débito ou crédito) que serão formalizadas por NFS-e, as quais, no AnexoVI-LeiautesRN_RTC_IBSCBS-V1.04.00 – NT009, estão marcadas na cor azul. Exemplo abaixo no grupo “valores”:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/** | **valores** | **G** | **-** | **0-1** | **-** | **Grupo de valores referentes ao serviço prestado** |

- Criação da planilha “NFS-e_AJUSTE_LEIAUTE” com os tipos de notas de ajuste que serão possíveis no contexto da NFS-e e seus respectivos grupos/campos: marcados com X quando não deverão ser informados (DPS) ou não existirão no documento ou com V quando poderão ser informados, entrando nas regras gerais. A planilha é um norteador dos campos que serão necessários para cada um dos tipos de NFS-e de ajuste;

- Criação do grupo “gIBSCBSAjuste”, para informação, na DPS, dos valores de ajuste de IBS e de CBS referentes às NFS-e de ajuste de crédito e de débito:

<!-- p.04 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/** | **gIBSCBSAjuste** | **G** | **-** | **0-1** | **-** | **Grupo de informações para as Notas de Ajuste** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBSAjuste/ | vIBS | E | N | 1-1 | 1-15V2 | Valor do IBS a ser ajustado. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBSAjuste/ | vCBS | E | N | 1-1 | 1-15V2 | Valor da CBS a ser ajustado. |

- Deslocamento e atualização do domínio do campo “finNFSe”, bem como a inserção dos campos “tpNFSeDebito” e “tpNFSeCredito”, a fim de contemplar as opções relativas às NFS-e de ajuste de crédito e de débito:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/ | finNFSe | E | N | 1-1 | 1 | Indicador da finalidade da emissão de NFS-e:<br>0 - NFS-e regular;<br>1 - NFS-e de crédito;<br>2 - NFS-e de débito |
| NFSe/infNFSe/DPS/infDPS/ | tpNFSeDebito | E | N | 0-1 | 2 | Indicador do tipo de NFS-e de Ajuste de Débito (indicado apenas quando finNFSe = 2):<br>01 - Transferência de créditos para Cooperativas;<br>02 - Anulação de Crédito por Saídas Imunes/Isentas;<br>03 - Débitos de notas fiscais não processadas na apuração;<br>04 - Multa e juros;<br>05 - Transferência de crédito na sucessão;<br>06 - Pagamento Antecipado |
| NFSe/infNFSe/DPS/infDPS/ | tpNFSeCredito | E | N | 0-1 | 2 | Indicador do tipo de NFS-e de Ajuste de Crédito (indicado apenas quando finNFSe = 1):<br>01 - Multa e juros;<br>05 - Transferência de crédito na sucessão |

> **Observação do original:** Algumas regras relacionadas às notas de ajuste foram inseridas na planilha RN DPS_NFS-e, mas foram ~~tachadas~~ uma vez que essas regras ainda estão em evolução e deverão passar por alterações. Optou-se por mantê-las na planilha, mesmo tachadas, para uma melhor compreensão da sistemática de obrigatoriedade dos campos e grupos que será implementada.
>
> **Revogado/Descontinuado:** as regras de notas de ajuste da planilha RN DPS_NFS-e estão tachadas no original (em evolução); não são vigentes até a publicação das alterações.
