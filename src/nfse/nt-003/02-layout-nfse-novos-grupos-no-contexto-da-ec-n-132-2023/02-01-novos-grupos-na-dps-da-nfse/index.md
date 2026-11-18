# 2.1 Novos Grupos na DPS da NFS-e

Na DPS, foi criado o grupo IBSCBS (caminho NFSe/infNFSe/DPS/infDPS/). Neste grupo serão dispostos todos os subgrupos e informações relativas aos novos tributos: IBS e CBS; e que deverão ser informados pelo contribuinte na emissão. Importante observar que os campos/tags/células listados abaixo em amarelo se referem a campos que foram modificados em relação à versão anterior, publicada na Nota Técnica SE/CGNFS-e nº 002, de 28 de fevereiro de 2025.

> **Nota de transcrição:** o destaque amarelo do original aparece aqui como `<mark>`; texto riscado no original aparece como `~~texto~~`.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/** | **IBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações declaradas pelo emitente referentes ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | <mark>finNFSe</mark> | E | N | 1-1 | 1 | <mark>Indicador da finalidade da emissão de NFS-e<br><br>0 = NFS-e regular<br>~~1 = NFS-e de crédito~~<br>~~2 = NFS-e de débito~~</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | <mark>indFinal</mark> | E | N | 1-1 | 1 | <mark>Indica operação de uso ou consumo pessoal.<br><br>0=Não<br>1=Sim</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | <mark>cIndOp</mark> | E | N | 1-1 | 6 | <mark>Código indicador da operação de fornecimento, conforme tabela “código indicador de operação”</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | <mark>tpEnteGov</mark> | E | N | 0-1 | 1 | <mark>Tipo de ente governamental<br><br>Para administração pública direta e suas autarquias e fundações:<br>1 = União<br>2 = Estado<br>3 = Distrito Federal<br>4 = Município<br>9 = Outro</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | <mark>xTpEnteGov</mark> | E | C | 0-1 | 100 | <mark>Se tpEnteGov informado for igual a 9 = outro, este campo deve informar qual a descrição do ente. Exemplo: “Comitê Gestor do IBS”.</mark> |

<!-- p.07 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | <mark>indPessoas</mark> | E | N | 1-1 | 1 | <mark>A respeito do Destinatário dos serviços:<br><br>0 – O tomador identificado na NFS-e é o adquirente e o destinatário do fornecimento (tomador = adquirente = destinatário);<br>1 – O tomador e o adquirente são a mesma pessoa, mas o destinatário é uma pessoa física ou jurídica ou equiparada diversa do indicado como tomador/adquirente ou se trata de um estabelecimento do adquirente diferente do indicado no campo “tomador” (tomador = adquirente ≠ destinatário);<br>2 - O adquirente e o destinatário são a mesma pessoa, mas diferente do tomador de serviços; (tomador ≠ adquirente = destinatário)<br>3 - O tomador e o destinatário são a mesma pessoa, diferente do adquirente; (tomador = destinatário ≠ adquirente)<br>4 - O tomador, o adquirente e o destinatário são pessoas distintas que devem ser identificadas. (tomador ≠ adquirente ≠ destinatário)</mark> |

Algumas observações importantes acerca dos campos acima:

1. O campo “cIndOp” se refere à tabela de indicador da operação publicada no ANEXO AnexoVII-IndOp_IBSCBS_V1.00.00-.xlsx;
2. As notas de ajuste, de crédito e de débito, estão em processo de estudos e atualizações serão publicadas nas próximas notas técnicas. Portanto, a menção a essas notas de ajuste na descrição do campo “finNFSe” tem, por enquanto, o único objetivo de esclarecer a necessidade da criação desse campo.

> **Revogado/Descontinuado:** no original, os códigos 1 (NFS-e de crédito) e 2 (NFS-e de débito) do campo `finNFSe` estão riscados; ver a observação 2 acima.
