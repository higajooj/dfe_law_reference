<!-- p.9 -->
# 3.3. Grupo N05. Grupo Tributação do ICMS= 30

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **193** | **N05** | **ICMS30** | **Grupo Tributação do ICMS = 30** | **CG** | **N01** | | **1-1** | | **Tributação Isenta ou não tributada e com cobrança do ICMS por substituição tributária** |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| **201.1** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N05** | | **0-1** | | **Grupo opcional.** |
| 201.2 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo. |
| 201.3 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>6=Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);<br>7=SUFRAMA;<br>9=Outros; |
| 201.4 | N28b | indDeduzDeson | Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd). | E | N27.1 | N | 0-1 | 1 | O campo só pode ser preenchido com:<br>0=Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e.<br>1=Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e. |
