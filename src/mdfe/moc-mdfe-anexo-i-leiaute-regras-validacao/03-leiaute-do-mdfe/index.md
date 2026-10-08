# 3 Leiaute do MDFe

<!-- p.22 -->

Legendas coluna **Ele** (Elemento): A – Atributo, E – Elemento, G – Grupo, ES – Elemento da Sequência, CE – Choice Element (escolha entre elementos), CG – Choice Group (Escolha entre grupos).

Legendas coluna **Tipo**: N – Numérico, C – Caracteres, D – Data.

ERXX – Expressão Regular (ver tabela de expressões regulares).

DXX – Valores de Domínio (ver tabela de valores de domínio).

Ocorr: 0 - 1 (opcional sem repetição), 1 – 1 (obrigatório sem repetição), 0 – n (opcional com múltiplas ocorrências), 1 – n (obrigatório com múltiplas ocorrências).

As subseções deste capítulo estão em:

- [3.1 Leiaute do Modal Rodoviário](03-01-leiaute-modal-rodoviario.md)
- [3.2 Leiaute do Modal Aéreo](03-02-leiaute-modal-aereo.md)
- [3.3 Leiaute do Modal Ferroviário](03-03-leiaute-modal-ferroviario.md)
- [3.4 Leiaute do Modal Aquaviário](03-04-leiaute-modal-aquaviario.md)
- [3.5 Expressões regulares](03-05-expressoes-regulares.md)
- [3.6 Valores de domínio](03-06-valores-dominio.md)

Na coluna **Descrição/Observação**, os códigos da coluna de domínio e de expressão regular da fonte aparecem como *Dom.:* e *ER:*.

## Leiaute geral do MDFe

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **infMDFe** | **G** | **0** | | **1 - 1** | | **Informações do MDFe** |
| 2 | versao | A | 1 | C | 1 - 1 | | Versão do leiaute. *ER:* ER53. Ex: "3.00" |
| 3 | Id | A | 1 | C | 1 - 1 | 48 | Identificador da tag a ser assinada. *ER:* ER48. Informar a chave de acesso do MDFe e precedida do literal "MDFe" |
| 4 | **ide** | **G** | **1** | | **1 - 1** | | **Identificação do MDFe** |
| 5 | cUF | E | 2 | N | 1 - 1 | 2 | Código da UF do emitente do MDFe. *Dom.:* D1. Utilizar a Tabela do IBGE de código de unidades da federação. |
| 6 | tpAmb | E | 2 | N | 1 - 1 | 1 | Tipo do Ambiente. *Dom.:* D6. 1 - Produção; 2 - Homologação <!-- p.23 --> |
| 7 | tpEmit | E | 2 | N | 1 - 1 | 1 | Tipo do Emitente. *Dom.:* D7. 1 - Prestador de serviço de transporte; 2 - Transportador de Carga Própria; 3 - Prestador de serviço de transporte que emitirá CTe Globalizado. OBS: Deve ser preenchido com 2 para emitentes de NFe e pelas transportadoras quando estiverem fazendo transporte de carga própria. Deve ser preenchido com 3 para transportador de carga que emitirá à posteriori CTe Globalizado relacionando as NFe. |
| 8 | tpTransp | E | 2 | N | 0 - 1 | 1 | Tipo do Transportador. *Dom.:* D7. 1 - ETC; 2 - TAC; 3 - CTC |
| 9 | mod | E | 2 | N | 1 - 1 | 2 | Modelo do Manifesto Eletrônico. *Dom.:* D4. Utilizar o código 58 para identificação do MDFe |
| 10 | serie | E | 2 | C | 1 - 1 | 1 - 3 | Série do Manifesto. *ER:* ER32. Informar a série do documento fiscal (informar zero se inexistente). Série na faixa [920-969]: Reservada para emissão por contribuinte pessoa física com inscrição estadual. |
| 11 | nMDF | E | 2 | C | 1 - 1 | 1 - 9 | Número do Manifesto. *ER:* ER31. Número que identifica o Manifesto. 1 a 999999999. |
| 12 | cMDF | E | 2 | C | 1 - 1 | 8 | Código numérico que compõe a Chave de Acesso. *ER:* ER41. Código aleatório gerado pelo emitente, com o objetivo de evitar acessos indevidos ao documento. |
| 13 | cDV | E | 2 | C | 1 - 1 | 1 | Digito verificador da chave de acesso do Manifesto. *ER:* ER42. Informar o dígito de controle da chave de acesso do MDFe, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso. |
| 14 | modal | E | 2 | N | 1 - 1 | 1 | Modalidade de transporte. *Dom.:* D9. 1 - Rodoviário; 2 - Aéreo; 3 - Aquaviário; 4 - Ferroviário. |
| 15 | dhEmi | E | 2 | C | 1 - 1 | 21 | Data e hora de emissão do Manifesto. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 16 | tpEmis | E | 2 | N | 1 - 1 | 1 | Forma de emissão do Manifesto. *Dom.:* D7. 1 - Normal; 2 – Contingência Off-Line; 3 - Regime Especial NFF |
| 17 | procEmi | E | 2 | N | 1 - 1 | 1 | Identificação do processo de emissão do Manifesto. *Dom.:* D13. 0 - Emissão de MDFe com aplicativo do contribuinte |
| 18 | verProc | E | 2 | C | 1 - 1 | 1 - 20 | Versão do processo de emissão. *ER:* ER35. Informar a versão do aplicativo emissor de MDFe. |
| 19 | UFIni | E | 2 | C | 1 - 1 | 2 | Sigla da UF do Carregamento. *Dom.:* D5. Utilizar a Tabela do IBGE de código de unidades da federação. Informar 'EX' para operações com o exterior. |
| 20 | UFFim | E | 2 | C | 1 - 1 | 2 | Sigla da UF do Descarregamento. *Dom.:* D5. Utilizar a Tabela do IBGE de código de unidades da federação. Informar 'EX' para operações com o exterior. <!-- p.24 --> |
| 21 | **infMunCarrega** | **G** | **2** | | **1 - 50** | | **Informações dos Municípios de Carregamento** |
| 22 | cMunCarrega | E | 3 | C | 1 - 1 | 7 | Código do Município de Carregamento. *ER:* ER2 |
| 23 | xMunCarrega | E | 3 | C | 1 - 1 | 2 - 60 | Nome do Município de Carregamento. *ER:* ER35 |
| 24 | **infPercurso** | **G** | **2** | | **0 - 25** | | **Informações do Percurso do MDFe** |
| 25 | UFPer | E | 3 | C | 1 - 1 | 2 | Sigla das Unidades da Federação do percurso do veículo. *Dom.:* D5. Não é necessário repetir as UF de Início e Fim do percurso do veículo. |
| 26 | dhIniViagem | E | 2 | C | 0 - 1 | 21 | Data e hora previstos de início da viagem. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 27 | indCanalVerde | E | 2 | N | 0 - 1 | 1 | Indicador de participação do Canal Verde. *Dom.:* D10 |
| 28 | indCarregaPosterior | E | 2 | N | 0 - 1 | 1 | Indicador de MDFe com inclusão da Carga posterior a emissão por evento de inclusão de DF-e. *Dom.:* D10 |
| 29 | **emit** | **G** | **1** | | **1 - 1** | | **Identificação do Emitente do Manifesto** |
| 30 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do emitente. *ER:* ER7. Informar zeros não significativos |
| 31 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do emitente. *ER:* ER10. Informar zeros não significativos. Usar com série específica 920-969 para emitente pessoa física com inscrição estadual. Poderá ser usado também para emissão do Regime Especial da Nota Fiscal Fácil |
| 32 | IE | E | 2 | C | 0 - 1 | 2 - 14 | Inscrição Estadual do emitemte. *ER:* ER30 |
| 33 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou Nome do emitente. *ER:* ER35 |
| 34 | xFant | E | 2 | C | 0 - 1 | 1 - 60 | Nome fantasia do emitente. *ER:* ER35 |
| 35 | **enderEmit** | **G** | **2** | | **1 - 1** | | **Endereço do emitente** |
| 36 | xLgr | E | 3 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER35 |
| 37 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER35 |
| 38 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER35 |
| 39 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER35 |
| 40 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior. *ER:* ER2 |
| 41 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município, informar EXTERIOR para operações com o exterior. *ER:* ER35 <!-- p.25 --> |
| 42 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 43 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF, informar EX para operações com o exterior. *Dom.:* D5 |
| 44 | fone | E | 3 | C | 0 - 1 | 7 - 12 | Telefone. *ER:* ER50 |
| 45 | email | E | 3 | C | 0 - 1 | 6 - 60 | Endereço de E-mail. *ER:* ER57 |
| 46 | **infModal** | **G** | **1** | | **1 - 1** | | **Informações do modal** |
| 47 | versaoModal | A | 2 | C | 1 - 1 | 4 | Versão do leiaute específico para o Modal. *ER:* ER43 |
| 48 | xs:any | E | 2 | C | 1 - 1 | | XML do modal. O elemento do tipo -any- permite estender o documento XML com elementos não especificados pelo schema. Insira neste local - any- o XML específico do modal (rodoviário, aéreo, ferroviário ou aquaviário). A especificação do schema XML para cada modal pode ser encontrada nos arquivos que acompanham este pacote de liberação: Rodoviário - ver arquivo MDFeModalRodoviario_v9.99; Aéreo - ver arquivo MDFeModalAereo_v9.99; Aquaviário - arquivo MDFeModalAquaviario_v9.99; Ferroviário - arquivo MDFeModalFerroviario_v9.99. Onde v9.99 é a a designação genérica para a versão do arquivo. Por exemplo, o arquivo para o schema do modal Rodoviário na versão 1.00 será denominado "MDFeModalRodoviario_v1.00". |
| 49 | **infDoc** | **G** | **1** | | **1 - 1** | | **Informações dos Documentos fiscais vinculados ao manifesto** |
| 50 | **infMunDescarga** | **G** | **2** | | **1 - 1000** | | **Informações dos Municípios de descarregamento** |
| 51 | cMunDescarga | E | 3 | C | 1 - 1 | 7 | Código do Município de Descarregamento. *ER:* ER2 |
| 52 | xMunDescarga | E | 3 | C | 1 - 1 | 2 - 60 | Nome do Município de Descarregamento. *ER:* ER35 |
| 53 | **infCTe** | **G** | **3** | | **0 - 10000** | | **Conhecimentos de Transporte – usar este grupo quando for prestador de serviço de transporte** |
| 54 | chCTe | E | 4 | C | 1 - 1 | 44 | Conhecimento Eletrônico – Chave de Acesso. *ER:* ER3 <!-- p.26 --> |
| 55 | SegCodBarra | E | 4 | C | 0 - 1 | 36 | Segundo código de barras. *ER:* ER4 |
| 56 | indReentrega | E | 4 | N | 0 - 1 | 1 | Indicador de Reentrega. *Dom.:* D10 |
| 57 | **infUnidTransp** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as informações das unidades de transporte utilizadas.** |
| 58 | tpUnidTransp | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Transporte. *Dom.:* D8. 1 - Rodoviário Tração; 2 - Rodoviário Reboque; 3 - Navio; 4 - Balsa; 5 - Aeronave; 6 - Vagão; 7 - Outros |
| 59 | idUnidTransp | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte. *ER:* ER56. Informar a identificação conforme o tipo de unidade de transporte. Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| 60 | **lacUnidTransp** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Transporte** |
| 61 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre. *ER:* ER35 |
| 62 | **infUnidCarga** | **G** | **5** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device – ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 63 | tpUnidCarga | E | 6 | N | 1 - 1 | 1 | Tipo da Unidade de Carga. *Dom.:* D9. 1 - Container; 2 - ULD; 3 - Pallet; 4 - Outros; |
| 64 | idUnidCarga | E | 6 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga. *ER:* ER56. Informar a identificação da unidade de carga, por exemplo: número do container. |
| 65 | **lacUnidCarga** | **G** | **6** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 66 | nLacre | E | 7 | C | 1 - 1 | 1 - 20 | Número do lacre. *ER:* ER35 |
| 67 | qtdRat | E | 6 | C | 0 - 1 | 3,2 3,3 | Quantidade rateada (Peso,Volume). *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 68 | qtdRat | E | 5 | C | 0 - 1 | 3,2 3,3 | Quantidade rateada (Peso,Volume). *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 69 | **peri** | **G** | **4** | | **0 - n** | | **Preenchido quando for transporte de produtos classificados pela ONU como perigosos.** |
| 70 | nONU | E | 5 | C | 1 - 1 | 4 | Número ONU/UN. *ER:* ER44. Ver a legislação de transporte de produtos perigosos aplicadas ao modal <!-- p.27 --> |
| 71 | xNomeAE | E | 5 | C | 0 - 1 | 1 - 150 | Nome apropriado para embarque do produto. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicada ao modo de transporte |
| 72 | xClaRisco | E | 5 | C | 0 - 1 | 1 - 40 | Classe ou subclasse/divisão, e risco subsidiário/risco secundário. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicadas ao modal |
| 73 | grEmb | E | 5 | C | 0 - 1 | 1 - 6 | Grupo de Embalagem. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicadas ao modal. Preenchimento obrigatório para o modal aéreo. A legislação para o modal rodoviário e ferroviário não atribui grupo de embalagem para todos os produtos, portanto haverá casos de não preenchimento desse campo. |
| 74 | qTotProd | E | 5 | C | 1 - 1 | 1 - 20 | Quantidade total por produto. *ER:* ER35. Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal |
| 75 | qVolTipo | E | 5 | C | 0 - 1 | 1 - 60 | Quantidade e Tipo de volumes. *ER:* ER35. Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal |
| 76 | **infEntregaParcial** | **G** | **4** | | **0 - 1** | | **Grupo de informações da Entrega Parcial (Corte de Voo)** |
| 77 | qtdTotal | E | 5 | C | 1 - 1 | 11,4 | Quantidade total de volumes. *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 78 | qtdParcial | E | 5 | C | 1 - 1 | 11,4 | Quantidade de volumes enviados no MDFe. *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 79 | **infNFe** | **G** | **3** | | **0 - 10000** | | **Nota Fiscal Eletrônica** |
| 80 | chNFe | E | 4 | C | 1 - 1 | 44 | Nota Fiscal Eletrônica. *ER:* ER3 |
| 81 | SegCodBarra | E | 4 | C | 0 - 1 | 36 | Segundo código de barras. *ER:* ER4 |
| 82 | indReentrega | E | 4 | N | 0 - 1 | 1 | Indicador de Reentrega. *Dom.:* D10 |
| 83 | **infUnidTransp** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão). Deve ser preenchido com as informações das unidades de transporte utilizadas.** |
| 84 | tpUnidTransp | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Transporte. *Dom.:* D8. 1 - Rodoviário Tração; 2 - Rodoviário Reboque; 3 - Navio; 4 - Balsa; 5 - Aeronave; 6 - Vagão; 7 - Outros |
| 85 | idUnidTransp | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte. *ER:* ER56. Informar a identificação conforme o tipo de unidade de transporte. Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| 86 | **lacUnidTransp** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Transporte** <!-- p.28 --> |
| 87 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre. *ER:* ER35 |
| 88 | **infUnidCarga** | **G** | **5** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device – ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 89 | tpUnidCarga | E | 6 | N | 1 - 1 | 1 | Tipo da Unidade de Carga. *Dom.:* D9. 1 - Container; 2 - ULD; 3 - Pallet; 4 - Outros; |
| 90 | idUnidCarga | E | 6 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga. *ER:* ER56. Informar a identificação da unidade de carga, por exemplo: número do container. |
| 91 | **lacUnidCarga** | **G** | **6** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 92 | nLacre | E | 7 | C | 1 - 1 | 1 - 20 | Número do lacre. *ER:* ER35 |
| 93 | qtdRat | E | 6 | C | 0 - 1 | 3,2 3,3 | Quantidade rateada (Peso,Volume). *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 94 | qtdRat | E | 5 | C | 0 - 1 | 3,2 3,3 | Quantidade rateada (Peso,Volume). *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 95 | **peri** | **G** | **4** | | **0 - n** | | **Preenchido quando for transporte de produtos classificados pela ONU como perigosos.** |
| 96 | nONU | E | 5 | C | 1 - 1 | 4 | Número ONU/UN. *ER:* ER44. Ver a legislação de transporte de produtos perigosos aplicadas ao modal |
| 97 | xNomeAE | E | 5 | C | 0 - 1 | 1 - 150 | Nome apropriado para embarque do produto. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicada ao modo de transporte |
| 98 | xClaRisco | E | 5 | C | 0 - 1 | 1 - 40 | Classe ou subclasse/divisão, e risco subsidiário/risco secundário. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicadas ao modal |
| 99 | grEmb | E | 5 | C | 0 - 1 | 1 - 6 | Grupo de Embalagem. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicadas ao modal. Preenchimento obrigatório para o modal aéreo. A legislação para o modal rodoviário e ferroviário não atribui grupo de embalagem para todos os produtos, portanto haverá casos de não preenchimento desse campo. |
| 100 | qTotProd | E | 5 | C | 1 - 1 | 1 - 20 | Quantidade total por produto. *ER:* ER35. Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal |
| 101 | qVolTipo | E | 5 | C | 0 - 1 | 1 - 60 | Quantidade e Tipo de volumes. *ER:* ER35. Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal |
| 102 | **infMDFeTransp** | **G** | **3** | | **0 - 10000** | | **Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC)** |
| 103 | chMDFe | E | 4 | C | 1 - 1 | 44 | Manifesto Eletrônico de Documentos Fiscais. *ER:* ER3 <!-- p.29 --> |
| 104 | indReentrega | E | 4 | N | 0 - 1 | 1 | Indicador de Reentrega. *Dom.:* D10 |
| 105 | **infUnidTransp** | **G** | **4** | | **0 - n** | | **Informações das Unidades de Transporte (Carreta/Reboque/Vagão).** <!-- REVISAR p.29: na fonte, a observação deste grupo traz o texto de "Dispositivo de carga utilizada (ULD)"; transcrito como está, conferir --> |
| 106 | tpUnidTransp | E | 5 | N | 1 - 1 | 1 | Tipo da Unidade de Transporte. *Dom.:* D8. 1 - Rodoviário Tração; 2 - Rodoviário Reboque; 3 - Navio; 4 - Balsa; 5 - Aeronave; 6 - Vagão; 7 - Outros |
| 107 | idUnidTransp | E | 5 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Transporte. *ER:* ER56. Informar a identificação conforme o tipo de unidade de transporte. Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo. |
| 108 | **lacUnidTransp** | **G** | **5** | | **0 - n** | | **Lacres das Unidades de Transporte** |
| 109 | nLacre | E | 6 | C | 1 - 1 | 1 - 20 | Número do lacre. *ER:* ER35 |
| 110 | **infUnidCarga** | **G** | **5** | | **0 - n** | | **Informações das Unidades de Carga (Containeres/ULD/Outros). Dispositivo de carga utilizada (Unit Load Device – ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.** |
| 111 | tpUnidCarga | E | 6 | N | 1 - 1 | 1 | Tipo da Unidade de Carga. *Dom.:* D9. 1 - Container; 2 - ULD; 3 - Pallet; 4 - Outros; |
| 112 | idUnidCarga | E | 6 | C | 1 - 1 | 1 - 20 | Identificação da Unidade de Carga. *ER:* ER56. Informar a identificação da unidade de carga, por exemplo: número do container. |
| 113 | **lacUnidCarga** | **G** | **6** | | **0 - n** | | **Lacres das Unidades de Carga** |
| 114 | nLacre | E | 7 | C | 1 - 1 | 1 - 20 | Número do lacre. *ER:* ER35 |
| 115 | qtdRat | E | 6 | C | 0 - 1 | 3,2 3,3 | Quantidade rateada (Peso,Volume). *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 116 | qtdRat | E | 5 | C | 0 - 1 | 3,2 3,3 | Quantidade rateada (Peso,Volume). *ER:* ER15. 5 posições, sendo 3 inteiras e 2 a 3 casas decimais. |
| 117 | **peri** | **G** | **4** | | **0 - n** | | **Preenchido quando for transporte de produtos classificados pela ONU como perigosos.** |
| 118 | nONU | E | 5 | C | 1 - 1 | 4 | Número ONU/UN. *ER:* ER44. Ver a legislação de transporte de produtos perigosos aplicadas ao modal <!-- p.30 --> |
| 119 | xNomeAE | E | 5 | C | 0 - 1 | 1 - 150 | Nome apropriado para embarque do produto. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicada ao modo de transporte |
| 120 | xClaRisco | E | 5 | C | 0 - 1 | 1 - 40 | Classe ou subclasse/divisão, e risco subsidiário/risco secundário. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicadas ao modal |
| 121 | grEmb | E | 5 | C | 0 - 1 | 1 - 6 | Grupo de Embalagem. *ER:* ER35. Ver a legislação de transporte de produtos perigosos aplicadas ao modal. Preenchimento obrigatório para o modal aéreo. A legislação para o modal rodoviário e ferroviário não atribui grupo de embalagem para todos os produtos, portanto haverá casos de não preenchimento desse campo. |
| 122 | qTotProd | E | 5 | C | 1 - 1 | 1 - 20 | Quantidade total por produto. *ER:* ER35. Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal |
| 123 | qVolTipo | E | 5 | C | 0 - 1 | 1 - 60 | Quantidade e Tipo de volumes. *ER:* ER35. Preencher conforme a legislação de transporte de produtos perigosos aplicada ao modal |
| 124 | **seg** | **G** | **1** | | **0 - n** | | **Informações de Seguro da Carga** |
| 125 | **infResp** | **G** | **2** | | **1 - 1** | | **Informações do responsável pelo seguro da carga** |
| 126 | respSeg | E | 3 | N | 1 - 1 | 1 | Responsável pelo seguro. *Dom.:* D6. Preencher com: 1 - Emitente do MDFe; 2 - Responsável pela contratação do serviço de transporte (contratante). Dados obrigatórios apenas no modal Rodoviário, depois da lei 11.442/07. Para os demais modais esta informação é opcional. |
| 127 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ do responsável pelo seguro. *ER:* ER7. Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte – pessoa jurídica |
| 128 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF do responsável pelo seguro. *ER:* ER10. Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte – pessoa física |
| 129 | **infSeg** | **G** | **2** | | **0 - 1** | | **Informações da seguradora** |
| 130 | xSeg | E | 3 | C | 1 - 1 | 1 - 30 | Nome da Seguradora. *ER:* ER35 |
| 131 | CNPJ | E | 3 | C | 1 - 1 | 14 | Número do CNPJ da seguradora. *ER:* ER9. Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte – pessoa jurídica |
| 132 | nApol | E | 2 | C | 0 - 1 | 1 - 20 | Número da Apólice. *ER:* ER35. Obrigatório pela lei 11.442/07 (RCTRC) |
| 133 | nAver | E | 2 | C | 0 - n | 1 - 40 | Número da Averbação. *ER:* ER35. Informar as averbações do seguro |
| 134 | **prodPred** | **G** | **1** | | **0 - 1** | | **Produto predominante. Informar a descrição do produto predominante** |
| 135 | tpCarga | E | 2 | N | 1 - 1 | 2 | Tipo de Carga. *Dom.:* D11. Conforme Resolução ANTT nº 5.849/2019. 01 - Granel sólido; 02 - Granel líquido; 03 - Frigorificada; 04 - Conteinerizada; 05 - Carga Geral; 06 - Neogranel; 07 - Perigosa (granel sólido); 08 - Perigosa (granel líquido); 09 - Perigosa (carga frigorificada); 10 - Perigosa (conteinerizada); 11 - Perigosa (carga geral). |
| 136 | xProd | E | 2 | C | 1 - 1 | 1 - 120 | Descrição do produto. *ER:* ER35 <!-- p.31 --> |
| 137 | cEAN | E | 2 | C | 0 - 1 | 12 - 14 | GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras. *ER:* ER45 |
| 138 | NCM | E | 2 | C | 0 - 1 | 8 | Código NCM. *ER:* ER46 |
| 139 | **infLotacao** | **G** | **2** | | **0 - 1** | | **Informações da carga lotação. Informar somente quando MDFe for de carga lotação** |
| 140 | **infLocalCarrega** | **G** | **3** | | **1 - 1** | | **Informações da localização de carregamento do MDFe de carga lotação** |
| 141 | CEP | CE | 4 | C | 1 - 1 | 8 | CEP onde foi carregado o MDFe. *ER:* ER41. Informar zeros não significativos |
| 142 | latitude | E | 4 | C | 1 - 1 | 10 | Latitude do ponto geográfico onde foi carregado o MDFe. *ER:* ER37 |
| 143 | longitude | E | 4 | C | 1 - 1 | 11 | Latitude do ponto geográfico onde foi carregado o MDFe. *ER:* ER38 <!-- REVISAR p.31: descrição do campo longitude repete "Latitude" na fonte; transcrito literalmente --> |
| 144 | **infLocalDescarrega** | **G** | **3** | | **1 - 1** | | **Informações da localização de descarregamento do MDFe de carga lotação** |
| 145 | CEP | CE | 4 | C | 1 - 1 | 8 | CEP onde foi descarregado o MDFe. *ER:* ER41. Informar zeros não significativos |
| 146 | latitude | E | 4 | C | 1 - 1 | 10 | Latitude do ponto geográfico onde foi descarregado o MDFe. *ER:* ER37 |
| 147 | longitude | E | 4 | C | 1 - 1 | 11 | Latitude do ponto geográfico onde foi descarregado o MDFe. *ER:* ER38 <!-- REVISAR p.31: descrição do campo longitude repete "Latitude" na fonte; transcrito literalmente --> |
| 148 | **tot** | **G** | **1** | | **1 - 1** | | **Totalizadores da carga transportada e seus documentos fiscais** |
| 149 | qCTe | E | 2 | C | 0 - 1 | 1 - 6 | Quantidade total de CTe relacionados no Manifesto. *ER:* ER47 |
| 150 | qNFe | E | 2 | C | 0 - 1 | 1 - 6 | Quantidade total de NFe relacionadas no Manifesto. *ER:* ER47 <!-- p.32 --> |
| 151 | qMDFe | E | 2 | C | 0 - 1 | 1 - 6 | Quantidade total de MDFe relacionados no Manifesto Aquaviário. *ER:* ER47 |
| 152 | vCarga | E | 2 | C | 1 - 1 | 13,2 | Valor total da carga / mercadorias transportadas. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 153 | cUnid | E | 2 | N | 1 - 1 | 2 | Código da unidade de medida do Peso Bruto da Carga / Mercadorias transportadas. *Dom.:* D12. 01 – KG; 02 - TON |
| 154 | qCarga | E | 2 | C | 1 - 1 | 11,4 | Peso Bruto Total da Carga / Mercadorias transportadas. *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 155 | **lacres** | **G** | **1** | | **0 - n** | | **Lacres do MDFe. Preenchimento opcional para os modais Rodoviário e Ferroviário** |
| 156 | nLacre | E | 2 | C | 1 - 1 | 1 - 60 | Número do lacre. *ER:* ER35 |
| 157 | **autXML** | **G** | **1** | | **0 - 10** | | **Autorizados para download do XML do DF-e. Informar CNPJ ou CPF. Preencher os zeros não significativos.** |
| 158 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do autorizado. *ER:* ER7. Informar zeros não significativos |
| 159 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do autorizado. *ER:* ER10. Informar zeros não significativos |
| 160 | **infAdic** | **G** | **1** | | **0 - 1** | | **Informações Adicionais** |
| 161 | infAdFisco | E | 2 | C | 0 - 1 | 1 - 2000 | Informações adicionais de interesse do Fisco. *ER:* ER35. Norma referenciada, informações complementares etc. |
| 162 | infCpl | E | 2 | C | 0 - 1 | 1 - 5000 | Informações complementares de interesse do Contribuinte. *ER:* ER35 |
| 163 | **infRespTec** | **G** | **1** | | **0 - 1** | | **Informações do Responsável Técnico pela emissão do DF-e** |
| 164 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico. *ER:* ER7. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. <!-- REVISAR p.32: fragmento "sistema utilizado na emissão do documento fiscal eletrônico" aparece repetido na fonte; transcrito uma vez --> |
| 165 | xContato | E | 2 | C | 1 - 1 | 2 - 60 | Nome da pessoa a ser contatada. *ER:* ER35. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome. |
| 166 | email | E | 2 | C | 1 - 1 | 6 - 60 | Email da pessoa jurídica a ser contatada. *ER:* ER57 |
| 167 | fone | E | 2 | C | 1 - 1 | 7 - 12 | Telefone da pessoa jurídica a ser contatada. *ER:* ER50. Preencher com o Código DDD + número do telefone. |
| 168 | --- x --- | - | 0 | - | 0 - 1 | | Sequência XML |
| 169 | idCSRT | ES | 2 | C | 1 - 1 | 3 | Identificador do código de segurança do responsável técnico. *ER:* ER6. Identificador do CSRT utilizado para geração do hash do responsável técnico |
| 170 | hashCSRT | ES | 2 | C | 1 - 1 | 20 | Hash do token do código de segurança do responsável técnico. O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT). Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary <!-- p.33 --> |
| 171 | **infSolicNFF** | **G** | **1** | | **0 - 1** | | **Grupo de informações do pedido de emissão da Nota Fiscal Fácil** |
| 172 | xSolic | E | 2 | C | 1 - 1 | 2 - 2000 | Solicitação do pedido de emissão da NFF. *ER:* ER35. Será preenchido com a totalidade de campos informados no aplicativo emissor serializado. |
| 173 | **infPAA** | **G** | **1** | | **0 - 1** | | **Grupo de Informação do Provedor de Assinatura e Autorização** |
| 174 | CNPJPAA | E | 2 | C | 1 - 1 | 14 | CNPJ do Provedor de Assinatura e Autorização. *ER:* ER7 |
| 175 | **PAASignature** | **G** | **2** | | **1 - 1** | | **Assinatura RSA do Emitente para DF-e gerados por PAA** |
| 176 | SignatureValue | E | 3 | B64 | 1 - 1 | | Assinatura digital padrão RSA. Converter o atributo Id do DF-e para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64. |
| 177 | **RSAKeyValue** | **G** | **3** | | **1 - 1** | | **Chave Pública no padrão XML RSA Key** |
| 178 | Modulus | E | 4 | B64 | 1 - 1 | | |
| 179 | Exponent | E | 4 | B64 | 1 - 1 | | |
| 180 | **infMDFeSupl** | **G** | **0** | | **0 - 1** | | **Informações suplementares do MDFe** |
| 181 | qrCodMDFe | E | 1 | C | 1 - 1 | 50 - 1000 | Texto com o QR-Code para consulta do MDFe. *ER:* ER49 |
| 182 | ds:Signature | E | 0 | C | 1 - 1 | | |
