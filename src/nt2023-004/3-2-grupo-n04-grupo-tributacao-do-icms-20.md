<!-- p.8 -->
# 3.2. Grupo N04. Grupo Tributação do ICMS= 20

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **185** | **N04** | **ICMS20** | **Grupo Tributação do ICMS = 20** | **CG** | **N01** | | **1-1** | | **Tributação com redução de base de cálculo** |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| **192.1** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N04** | | **0-1** | | **Grupo opcional.** |
| 192.2 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo. |
| 192.3 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>12=Órgão de fomento e desenvolvimento agropecuário. |
| 192.4 | N28b | indDeduzDeson | Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd). | E | N27.1 | N | 0-1 | 1 | O campo só pode ser preenchido com:<br>0=Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e.<br>1=Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e. |
