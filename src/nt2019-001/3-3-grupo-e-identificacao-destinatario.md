<!-- p.16 -->
# 3.3 Grupo E. Identificação do Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| **E03a-30** | 55/65 | Se informado “idEstrangeiro” não pode ser informada “IE” do destinatário (tag: dest/IE). | Obrig. | 925 | Rej. | Rejeição: NF-e com identificação de estrangeiro e inscrição estadual informada para destinatário |
| **E14-30** | 55/65 | Se endereço do destinatário é no Exterior (tag: dest/UF = “EX"): - Código do país “cPais” (id: E14) não pode ser 1058 (Brasil). | Obrig | 926 | Rej | Rejeição: Operação com Exterior e país de destino igual a Brasil |
| **E16a-40** | 55 | Informado indicador de IE do Destinatário não-contribuinte (tag: indIEDest=9) e não é operação com consumidor final (tag: indFinal<>1) em operação de saída (tag: tpNF=1) que não é com exterior (tag:idDest<>3). | Obrig. | 696 | Rej. | Rejeição: Operação com não contribuinte deve indicar operação com consumidor final |
