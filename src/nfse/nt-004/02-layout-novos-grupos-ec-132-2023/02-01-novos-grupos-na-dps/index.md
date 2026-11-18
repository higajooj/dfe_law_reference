<!-- p.10 -->

# 2.1. Novos Grupos na DPS da NFS-e

Na DPS, foi criado o grupo IBSCBS (caminho NFSe/infNFSe/DPS/infDPS/). Neste grupo serão dispostos todos os subgrupos e informações relativas aos novos tributos: IBS e CBS; e que deverão ser informados pelo contribuinte na emissão. Importante observar que os campos/tags/células listados abaixo em laranja se referem a campos que foram modificados em relação à versão anterior, publicada na Nota Técnica SE/CGNFS-e nº 003, de 04 de julho de 2025.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/** | **IBSCBS** | **G** | **-** | **0-1** | **-** | **Grupo de informações declaradas pelo emitente referentes ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | finNFSe | E | N | 1-1 | 1 | **Indicador da finalidade da emissão de NFS-e**<br><br>0 = NFS-e regular<br>~~1 = NFS-e de crédito~~<br>~~2 = NFS-e de débito~~ |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | indFinal | E | N | 0-1 | 1 | **Indica operação de uso ou consumo pessoal.**<br><br>0=Não<br>1=Sim *[NT 002: Ocor.]* |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | cIndOp | E | N | 1-1 | 6 | Código indicador da operação de fornecimento, conforme tabela “código indicador de operação” |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | tpOper | E | N | 0-1 | 1 | Tipo de Operação com Entes Governanementais ou outros serviços sobre bens imóveis:<br><br>1 – Fornecimento com pagamento posterior;<br>2 - Recebimento do pagamento com fornecimento já realizado;<br>3 – Fornecimento com pagamento já realizado;<br>4 – Recebimento do pagamento com fornecimento posterior;<br>5 – Fornecimento e recebimento do pagamento concomitantes. *[NT 003]* |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **gRefNFSe** | **G** | **-** | **0-1** | **-** | **Grupo de NFS-e referenciadas. *[NT 003]*** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/gRefNFSe/ | refNFSe | E | C | 1-99 | 50 | Chave da NFS-e referenciada. *[NT 003]* |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | tpEnteGov | E | N | 0-1 | 1 | Tipo de ente governamental<br><br>Para administração pública direta e suas autarquias e fundações:<br>1 = União<br>2 = Estado<br>3 = Distrito Federal<br>4 = Município<br>~~9 = Outro~~ *[NT 003]* |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/~~ | ~~xTpEnteGov~~ | ~~E~~ | ~~C~~ | ~~0-1~~ | ~~100~~ | ~~Se tpEnteGov informado for igual a 9 = outro, este campo deve informar qual a descrição do ente. Exemplo: “Comitê Gestor do IBS”. *[NT 003]*~~ |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | ~~indPessoas~~<br>indDest | E | N | 1-1 | 1 | A respeito do Destinatário dos serviços:<br><br>0 – o destinatário é o próprio tomador/adquirente identificado na NFS-e **(tomador=adquirente=destinatário)**;<br>1 – o destinatário não é o próprio adquirente, podendo ser outra pessoa, física ou jurídica (ou equiparada), ou um estabelecimento diferente do indicado como tomador **(tomador=adquirente≠destinatário)**;<br>~~2 - O adquirente e o destinatário são a mesma pessoa, mas diferente do tomador de serviços; (tomador ≠ adquirente = destinatário)~~<br>~~3 - O tomador e o destinatário são a mesma pessoa, diferente do adquirente; (tomador = destinatário ≠ adquirente)~~<br>~~4 - O tomador, o adquirente e o destinatário são pessoas distintas que devem ser identificadas. (tomador ≠ adquirente ≠ destinatário)~~ *[NT 003]* |

<!-- p.11 -->

Algumas observações importantes acerca dos campos acima:

1. O campo “**cIndOp**” se refere à tabela de indicador da operação publicada no ANEXO **AnexoVII-IndOp_IBSCBS_V1.00.00-.xlsx**;
2. As notas de ajuste, de crédito e de débito, estão em processo de estudos e atualizações serão publicadas nas próximas notas técnicas. Portanto, a menção a essas notas de ajuste na descrição do campo “**finNFSe**” tem, por enquanto, o único objetivo de esclarecer a necessidade da criação desse campo.
