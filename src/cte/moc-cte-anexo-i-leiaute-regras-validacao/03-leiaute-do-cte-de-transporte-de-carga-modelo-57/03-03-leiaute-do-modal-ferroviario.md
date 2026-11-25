<!-- p.78 -->

# 3.3. Leiaute do Modal Ferroviário

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **ferrov** | **G** | **0** | | **1 - 1** | | **Informações do modal Ferroviário** |
| 2 | tpTraf | E | 1 | N | 1 - 1 | 1 | Tipo de Tráfego. *Dom.:* D22. Preencher com:<br>0-Próprio;<br>1-Mútuo;<br>2-Rodoferroviário;<br>3-Rodoviário. |
| 3 | **trafMut** | **G** | **1** | | **0 - 1** | | **Detalhamento de informações para o tráfego mútuo** |
| 4 | respFat | E | 2 | N | 1 - 1 | 1 | Responsável pelo Faturamento. *Dom.:* D1. Preencher com:<br>1-Ferrovia de origem;<br>2-Ferrovia de destino |
| 5 | ferrEmi | E | 2 | N | 1 - 1 | 1 | Ferrovia Emitente do CTe. *Dom.:* D1. Preencher com:<br>1-Ferrovia de origem;<br>2-Ferrovia de destino |
| 6 | vFrete | E | 2 | C | 1 - 1 | 13, 2 | <!-- p.79 -->Valor do Frete do Tráfego Mútuo. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 7 | chCTeFerroOrigem | E | 2 | C | 0 - 1 | 44 | Chave de acesso do CTe emitido pela ferrovia de origem. *ER:* ER4. |
| 8 | **ferroEnv** | **G** | **2** | | **0 - n** | | **Informações das Ferrovias Envolvidas** |
| 9 | CNPJ | E | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER5. Informar o CNPJ da Ferrovia Envolvida. Caso a Ferrovia envolvida não seja inscrita no CNPJ o campo deverá preenchido com zeros. Informar os zeros não significativos. |
| 10 | cInt | E | 3 | C | 0 - 1 | 1 - 10 | Código interno da Ferrovia envolvida. *ER:* ER36. Uso da transportadora |
| 11 | IE | E | 3 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER29. |
| 12 | xNome | E | 3 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome. *ER:* ER36. |
| 13 | **enderFerro** | **G** | **3** | | **1 - 1** | | **Dados do endereço da ferrovia envolvida** |
| 14 | xLgr | E | 4 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 15 | nro | E | 4 | C | 0 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 16 | xCpl | E | 4 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 17 | xBairro | E | 4 | C | 0 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 18 | cMun | E | 4 | C | 1 - 1 | 7 | Código do município. *ER:* ER3. Utilizar a tabela do IBGE<br>Informar 9999999 para operações com o exterior. |
| 19 | xMun | E | 4 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 20 | CEP | E | 4 | C | 1 - 1 | 8 | CEP. *ER:* ER41. |
| 21 | UF | E | 4 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 22 | fluxo | E | 1 | C | 1 - 1 | 1 - 10 | Fluxo Ferroviário. *ER:* ER36. Trata-se de um número identificador do contrato firmado com o cliente |
