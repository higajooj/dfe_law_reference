<!-- p.12 -->
# 6.1. Conceito de operação com intermediador da transação

Os Ajustes SINIEF 21/2020 e 22/2020 introduziram a exigência da identificação do intermediador da transação comercial na NF-e e NFC-e. Sendo assim, foram criados 4 campos na NF-e/NFC-e, sendo eles: indIntermed (B25c), infIntermed (YB01), CNPJ (YB02) e idCadIntTran (YB03).

O campo Indicador de intermediador/marketplace (indIntermed) é uma “flag” utilizada para o emitente da NF-e/NFC-e declarar quando a operação/venda ocorreu em site/marketplace ou plataforma de terceiro. Quando declarado que a operação for intermediada (indIntermed=1) será necessário informar os campos do grupo infIntermed (YB01): CNPJ (YB02) e idCadIntTran (YB03).

**Caracteriza-se venda com intermediador (indIntermed=1), quando o vendedor/emitente da NF-e/NFC-e (CNPJ14) for diferente do CNPJ14 do site/marketplace ou plataforma que realizou a venda.**

Em algumas situações, a venda/operação pode ocorrer com mais de um marketplace/intermediador, por exemplo quando o “Vendedor A” anuncia no “Marketplace M1” e este anuncia no “Marketplace M2”. Nesse caso, na hipótese do “Marketplace M1” ter enviado a informação para o “Vendedor A”, na NF-e deve ser informado o CNPJ do “Marketplace M1”.

**Em resumo, independente da cadeia de plataformas envolvidas, deve-se informar o CNPJ do intermediador (campo YB02) de quem que enviou a informação da venda para o vendedor/emitente da NF-e/NFC-e.**
