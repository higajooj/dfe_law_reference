<!-- p.22 -->

# Grupo JA. Detalhamento Específico de Veículos novos

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **129** | **veicProd (J01)** | **CG** | **I90** |  | **1-1** |  | **Detalhamento de Veículos novos<br>Informar apenas quando se tratar de veículos novos** |
| 130 | tpOp (J02) | E | J01 | N | 1-1 | 1 | Tipo da operação<br>1=Venda concessionária, 2=Faturamento direto para consumidor final 3=Venda direta para grandes consumidores (frotista, governo, ...) 0=Outros |
| 131 | chassi (J03) | E | J01 | C | 1-1 | 17 | Chassi do veículo<br>VIN (código-identificação-veículo) |
| 132 | cCor (J04) | E | J01 | C | 1-1 | 1 - 4 | Cor<br>Código de cada montadora |
| 133 | xCor (J05) | E | J01 | C | 1-1 | 1 - 40 | Descrição da Cor |
| 134 | pot (J06) | E | J01 | C | 1-1 | 1 - 4 | Potência Motor (CV) |
| 135 | cilin (J07) | E | J01 | C | 1-1 | 1 - 4 | Cilindradas<br>Potência máxima do motor do veículo em cavalo vapor (CV). (potência-veículo) |
| 136 | pesoL (J08) | E | J01 | C | 1-1 | 9v4 | Peso Líquido<br>Em toneladas - 4 casas decimais |
| 137 | pesoB (J09) | E | J01 | C | 1-1 | 9v4 | Peso Bruto<br>Peso Bruto Total - em tonelada - 4 casas decimais |
| 138 | nSerie (J10) | E | J01 | C | 1-1 | 1 - 9 | Serial (série) |
| 139 | tpComb (J11) | E | J01 | C | 1-1 | 1 - 2 | Tipo de combustível<br>Utilizar Tabela RENAVAM (v2.0) 01=Álcool, 02=Gasolina, 03=Diesel, (...);16=Álcool/Gasolina; 17=Gasolina/Álcool/GNV; 18=Gasolina/Elétrico |
| 140 | nMotor (J12) | E | J01 | C | 1-1 | 1 - 21 | Número de Motor |
| 141 | CMT (J13) | E | J01 | C | 1-1 | 9v4 | Capacidade Máxima de Tração<br>CMT-Capacidade Máxima de Tração - em Toneladas 4 casas decimais (v2.0) |
| 142 | dist (J14) | E | J01 | C | 1-1 | 1 - 4 | Distância entre eixos |
| 144 | anoMod (J16) | E | J01 | N | 1-1 | 4 | Ano Modelo de Fabricação |
| 145 | anoFab (J17) | E | J01 | N | 1-1 | 4 | Ano de Fabricação |
| 146 | tpPint (J18) | E | J01 | C | 1-1 | 1 | Tipo de Pintura |
| 147 | tpVeic (J19) | E | J01 | N | 1-1 | 1 - 2 | Tipo de Veículo<br>Utilizar Tabela RENAVAM, conforme exemplos abaixo: 02=CICLOMOTO; 03=MOTONETA; 04=MOTOCICLO; 05=TRICICLO; 06=AUTOMÓVEL; 07=MICROÔNIBUS; 08=ÔNIBUS;10=REBOQUE; 11=SEMIRREBOQUE;13=CAMINHONETA; 14=CAMINHÃO;17=C. TRATOR; 22=ESP / ÔNIBUS; 23=MISTO / CAM;24=CARGA/CAM; ... |
| 148 | espVeic (J20) | E | J01 | N | 1-1 | 1 | Espécie de Veículo<br>Utilizar Tabela RENAVAM 1=PASSAGEIRO; 2=CARGA; 3=MISTO;4=CORRIDA; 5=TRAÇÃO; 6=ESPECIAL; |
| 149 | VIN (J21) | E | J01 | C | 1-1 | 1 | Condição do VIN<br>Informa-se o veículo tem VIN (chassi) remarcado. R=Remarcado; N=Normal |
| 150 | condVeic (J22) | E | J01 | N | 1-1 | 1 | Condição do Veículo<br>1=Acabado; 2=Inacabado; 3=Semiacabado |
| 151 | cMod (J23) | E | J01 | N | 1-1 | 1 - 6 | Código Marca Modelo<br>Utilizar Tabela RENAVAM |
| 151a | (J24) | E | J01 | N | 1-1 | 1 - 2 | Código da Cor<br>Segundo as regras de pré-cadastro do DENATRAN (v2.0) 01=AMARELO, 02=AZUL, 03=BEGE,04=BRANCA, 05=CINZA, 06=-DOURADA,07=GRENÁ, 08=LARANJA, 09=MARROM,10=PRATA, 11=PRETA, 12=ROSA, 13=ROXA,14=VERDE, 15=VERMELHA, 16=FANTASIA <!-- p.23 --> |
| 151b | lota (J25) | E | J01 | N | 1-1 | 1 - 3 | Capacidade máxima de lotação<br>Quantidade máxima permitida de passageiros sentados, inclusive o motorista. (v2.0) |
| 151c | tpRest (J26) | E | J01 | N | 1-1 | 1 | Restrição<br>0=Não há; 1=Alienação Fiduciária; 2=Arrendamento Mercantil; 3=Reserva de Domínio; 4=Penhor de Veículos; 9=Outras. (v2.0) |
