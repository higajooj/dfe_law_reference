# 3.2 Leiaute do Modal Aéreo

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **aereo** | **G** | **0** | | **1 - 1** | | **Informações do modal aéreo** <!-- p.40 --> |
| 2 | nac | E | 1 | C | 1 - 1 | 1 - 4 | Marca da Nacionalidade da aeronave. *ER:* ER35 |
| 3 | matr | E | 1 | C | 1 - 1 | 1 - 6 | Marca de Matrícula da aeronave. *ER:* ER35 |
| 4 | nVoo | E | 1 | C | 1 - 1 | 5 - 9 | Número do Voo. *ER:* ER35. Formato = AB1234, sendo AB a designação da empresa e 1234 o número do voo. Quando não for possível incluir as marcas de nacionalidade e matrícula sem hífen. |
| 5 | cAerEmb | E | 1 | C | 1 - 1 | 3 - 4 | Aeródromo de Embarque. *ER:* ER35. O código de três letras IATA do aeroporto de partida deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI. |
| 6 | cAerDes | E | 1 | C | 1 - 1 | 3 - 4 | Aeródromo de Destino. *ER:* ER35. O código de três letras IATA do aeroporto de destino deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI. |
| 7 | dVoo | E | 1 | D | 1 - 1 | 10 | Data do Voo. *ER:* ER36. Formato AAAA-MM-DD |
