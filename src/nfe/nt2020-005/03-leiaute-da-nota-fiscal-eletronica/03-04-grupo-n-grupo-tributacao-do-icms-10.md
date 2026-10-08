<!-- p.12 -->
# 3.4. Grupo N. Grupo Tributação do ICMS=10

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **184.10** | **N33.1** | **-x-** | **Sequência XML** | **G** | **N03** | | **0-1** | | **Grupo opcional** |
| 184.11 | N33a | vICMSSTDeson | Valor do ICMS- ST desonerado | E | N33.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo |
| 184.12 | N33b | motDesICMSST | Motivo da desoneração do ICMS- ST | E | N33.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária<br>9=Outros<br>12=Órgão de fomento e desenvolvimento agropecuário |
