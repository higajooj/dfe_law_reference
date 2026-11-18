# 2.1 Novos Grupos na DPS da NFS-e

Na DPS, foi criado o grupo IBSCBS (caminho NFSe/infNFSe/DPS/infDPS/). Neste grupo serão dispostos todos os subgrupos e informações relativas aos novos tributos: IBS e CBS; e que deverão ser informados pelo contribuinte na emissão. Importante observar que os campos/tags/células listados abaixo em <mark>verde</mark> se referem a campos que foram modificados, excluídos ou inseridos em relação à versão anterior, publicada na NT SE/CGNFS-e nº 004, de 19 de agosto de 2025.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/** | **IBSCBS** | **G** | **-** | **0-1** | **-** | **Grupo de informações declaradas pelo emitente referentes ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | finNFSe | E | N | 1-1 | 1 | **Indicador da finalidade da emissão de NFS-e**<br><br>0 = NFS-e regular<br>~~1 = NFS-e de crédito~~<br>~~2 = NFS-e de débito~~ |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/</mark> | <mark>~~indFinal~~</mark> | <mark>~~E~~</mark> | <mark>~~N~~</mark> | <mark>~~1-1~~</mark> | <mark>~~1~~</mark> | <mark>~~Indica operação de uso ou consumo pessoal.~~<br><br>~~0=Não~~<br>~~1=Sim~~</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | cIndOp | E | N | 1-1 | 6 | Código indicador da operação de fornecimento, conforme tabela “código indicador de operação” |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | tpOper | E | N | 0-1 | 1 | Tipo de Operação com Entes Governanementais ou outros serviços sobre bens imóveis:<br><br>1 – Fornecimento com pagamento posterior;<br>2 - Recebimento do pagamento com fornecimento já realizado;<br>3 – Fornecimento com pagamento já realizado;<br>4 – Recebimento do pagamento com fornecimento posterior;<br>5 – Fornecimento e recebimento do pagamento concomitantes. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **gRefNFSe** | **G** | **-** | **0-1** | **-** | **Grupo de NFS-e referenciadas.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gRefNFSe/ | refNFSe | E | C | 1-99 | 50 | Chave da NFS-e referenciada. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | tpEnteGov | E | N | 0-1 | 1 | Tipo de ente governamental<br><br>Para administração pública direta e suas autarquias e fundações:<br>1 = União<br>2 = Estado<br>3 = Distrito Federal<br>4 = Município |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/</mark> | <mark>indDoacao</mark> | <mark>E</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>1</mark> | <mark>Indica uma Operação de Doação</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | indDest | E | N | 1-1 | 1 | A respeito do Destinatário dos serviços:<br><br>0 – o destinatário é o próprio tomador/adquirente identificado na NFS-e (tomador=adquirente=destinatário);<br>1 – o destinatário não é o próprio adquirente, podendo ser outra pessoa, física ou jurídica (ou equiparada), ou um estabelecimento diferente do indicado como tomador (tomador=adquirente≠destinatário); |

> **Revogado/Descontinuado:** no campo `finNFSe`, os valores “1 = NFS-e de crédito” e “2 = NFS-e de débito” estão riscados no original; a linha inteira do campo `indFinal` (descrição e valores “0=Não” e “1=Sim”) também está riscada e destacada em verde.

<!-- p.07 -->

Algumas observações importantes acerca dos campos acima:

1. O campo “**cIndOp**” se refere à tabela de indicador da operação publicada no ANEXO **AnexoVII-IndOp_IBSCBS_V1.00.00-.xlsx**;
2. As notas de ajuste, de crédito e de débito, estão em processo de estudos e atualizações serão publicadas na próxima nota técnica. Portanto, a menção a essas notas de ajuste na descrição do campo “**finNFSe**” tem, por enquanto, o único objetivo de esclarecer a necessidade da criação desse campo.
3. O campo “**indDoacao**” possuirá critérios de preenchimento a depender da operação, inclusive se relacionando ao novo grupo de informações “gEstornoCred” e ao código cClassTrib informado. Importante observar a coluna “NOTAS EXPLICATIVAS” no AnexoVI e as regras de negócio correspondentes para uma melhor compreensão.
