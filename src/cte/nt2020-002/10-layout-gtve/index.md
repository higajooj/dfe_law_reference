<!-- p.20 -->

# 10 Layout GTVe

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | versao | A | 0 | N | 1 - 1 | | Versão do leiaute. *ER:* ER57. |
| 2 | **infCte** | **G** | **0** | | **1 - 1** | | **Informações do CT-e do tipo GTVe** |
| 3 | versao | A | 1 | N | 1 - 1 | | Versão do leiaute. *ER:* ER57. Ex: "3.00" |
| 4 | Id | A | 1 | C | 1 - 1 | 47 | Identificador da tag a ser assinada. *ER:* ER45. Informar a chave de acesso do CT-e OS e precedida do literal "CTe" |
| 5 | **ide** | **G** | **1** | | **1 - 1** | | **Identificação da GTVe** |
| 6 | cUF | E | 2 | N | 1 - 1 | 2 | Código da UF do emitente da GTVe. *Dom.:* D2. Utilizar a Tabela do IBGE. |
| 7 | cCT | E | 2 | N | 1 - 1 | 8 | Código numérico que compõe a Chave de Acesso. *ER:* ER41. Número aleatório gerado pelo emitente para cada CT-e, com o objetivo de evitar acessos indevidos ao documento. |
| 8 | CFOP | E | 2 | N | 1 - 1 | 4 | Código Fiscal de Operações e Prestações. *ER:* ER52. |
| 9 | natOp | E | 2 | C | 1 - 1 | 1 - 60 | Natureza da Operação. *ER:* ER36. |
| 10 | mod | E | 2 | N | 1 - 1 | 2 | Modelo do documento fiscal. *Dom.:* D5. Utilizar o código 64 para identificação do CT-e Guia de Transporte de Valores |
| 11 | serie | E | 2 | N | 1 - 1 | 1 - 3 | Série da GTVe. *ER:* ER34. Preencher com "0" no caso de série única |
| 12 | nCT | E | 2 | N | 1 - 1 | 1 - 9 | Número da GTVe. *ER:* ER32. |
| 13 | dhEmi | E | 2 | C | 1 - 1 | 21 | Data e hora de emissão da GTVe. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 14 | tpImp | E | 2 | N | 1 - 1 | 1 | Formato de impressão do DACTE. *Dom.:* D1. Preencher com:<br>1 - Retrato;<br>2 - Paisagem. |
| 15 | tpEmis | E | 2 | N | 1 - 1 | 1 | <!-- p.21 -->Forma de emissão da GTVe. *Dom.:* D15. Preencher com:<br>1 - Normal;<br>2- Contingencia offline<br>7 - Autorização pela SVC-RS;<br>8 - Autorização pela SVC-SP |
| 16 | cDV | E | 2 | N | 1 - 1 | 1 | Digito Verificador da chave de acesso da GTVe. *ER:* ER42. Informar o dígito de controle da chave de acesso do CT-e, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso. |
| 17 | tpAmb | E | 2 | N | 1 - 1 | 1 | Tipo do Ambiente. *Dom.:* D1. Preencher com:<br>1 - Produção;<br>2 - Homologação |
| 18 | tpCTe | E | 2 | N | 1 - 1 | 1 | Tipo da GTVe. *Dom.:* D14. Preencher com:<br>4 - GTVe |
| 19 | verProc | E | 2 | C | 1 - 1 | 1 - 20 | Versão do processo de emissão. *ER:* ER36. Iinformar a versão do aplicativo emissor de CT-e. |
| 20 | cMunEnv | E | 2 | N | 1 - 1 | 7 | Código do Município de envio da GTVe (de onde o documento foi transmitido). *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior. |
| 21 | xMunEnv | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município de envio da GTVe (de onde o documento foi transmitido). *ER:* ER36. Informar PAIS/Municipio para as operações com o exterior. |
| 22 | UFEnv | E | 2 | C | 1 - 1 | 2 | Sigla da UF de envio da GTVe (de onde o documento foi transmitido). *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 23 | modal | E | 2 | N | 1 - 1 | 2 | Modal da GTVe. *Dom.:* D13. Preencher com:<br>01-Rodoviário<br>06-Multimodal |
| 24 | tpServ | E | 2 | N | 1 - 1 | 1 | Tipo do Serviço. *Dom.:* D16. Preencher com:<br>9 - GTV |
| 25 | indIEToma | E | 2 | N | 1 - 1 | 1 | <!-- p.22 -->Indicador da IE do tomador: *Dom.:* D17. 1 – Contribuinte ICMS;<br>2 – Contribuinte isento de inscrição;<br>9 – Não Contribuinte. Aplica-se ao tomador que for indicado no toma3 ou toma4 |
| 26 | dhSaidaOrig | E | 2 | C | 1 - 1 | 21 | Data e hora de saida da origem. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 27 | dhChegadaDest | E | 2 | C | 1 - 1 | 21 | Data e hora de chegada no destino. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 28 | **toma** | **CG** | **2** | | **1 - 1** | | **Indicador do "papel" do tomador do serviço no GT-e** |
| 29 | toma | E | 3 | N | 1 - 1 | 1 | Tomador do Serviço. *Dom.:* D18. Preencher com:<br>0-Remetente;<br>1-Destinatário |
| 30 | **tomaTerceiro** | **CG** | **2** | | **1 - 1** | | **Indicador do "papel" do tomador do serviço no CTV-e** |
| 31 | toma | E | 3 | N | 1 - 1 | 1 | Tomador do Serviço. *Dom.:* D19. Preencher com:<br>4 - Outros<br>Obs: Informar os dados cadastrais do tomador do serviço |
| 32 | CNPJ | CE | 3 | N | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 33 | CPF | CE | 3 | N | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 34 | IE | E | 3 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja <!-- p.23 -->contribuinte do ICMS não informar o conteúdo. |
| 35 | xNome | E | 3 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome. *ER:* ER36. |
| 36 | xFant | E | 3 | C | 0 - 1 | 2 - 60 | Nome Fantasia. *ER:* ER36. |
| 37 | fone | E | 3 | N | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 38 | **enderToma** | **G** | **3** | | **1 - 1** | | **Dados do endereço** |
| 39 | xLgr | E | 4 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 40 | nro | E | 4 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 41 | xCpl | E | 4 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 42 | xBairro | E | 4 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 43 | cMun | E | 4 | N | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 44 | xMun | E | 4 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 45 | CEP | E | 4 | N | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 46 | UF | E | 4 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 47 | cPais | E | 4 | N | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 48 | xPais | E | 4 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 49 | email | E | 3 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER53. |
| # | -- X -- | - | 2 | - | 0 - 1 | - | Sequência XML |
| 50 | dhCont | E | 2 | C | 1 - 1 | 21 | Data e Hora da entrada em contingência. *ER:* ER1. Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS |
| 51 | xJust | E | 2 | C | 1 - 1 | 15 - 256 | Justificativa da entrada em contingência. *ER:* ER36. |
| 52 | **compl** | **G** | **1** | | **0 - 1** | | <!-- p.24 -->**Dados complementares da GTVe para fins operacionais ou comerciais** |
| 53 | xCaracAd | E | 2 | C | 0 - 1 | 1 - 15 | Característica adicional do transporte. *ER:* ER36. Texto livre: REENTREGA; DEVOLUÇÃO; REFATURAMENTO; etc |
| 54 | xCaracSer | E | 2 | C | 0 - 1 | 1 - 30 | Característica adicional do serviço. *ER:* ER36. Texto livre: ENTREGA EXPRESSA; LOGÍSTICA REVERSA; CONVENCIONAL; EMERGENCIAL; etc |
| 55 | xEmi | E | 2 | C | 0 - 1 | 1 - 20 | Funcionário emissor da GTVe. *ER:* ER36. |
| 56 | xObs | E | 2 | C | 0 - 1 | 1 - 2000 | Observações Gerais. *ER:* ER36. |
| 57 | **ObsCont** | **G** | **2** | | **0 - 10** | | **Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto** |
| 58 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 59 | xTexto | E | 3 | C | 1 - 1 | 1 - 160 | Conteúdo do campo. *ER:* ER36. |
| 60 | **ObsFisco** | **G** | **2** | | **0 - 10** | | **Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto** |
| 61 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 62 | xTexto | E | 3 | C | 1 - 1 | 1 - 60 | Conteúdo do campo. *ER:* ER36. |
| 63 | **emit** | **G** | **1** | | **1 - 1** | | **Identificação do Emitente da GTVe** |
| 64 | CNPJ | E | 2 | N | 1 - 1 | 14 | CNPJ do emitente. *ER:* ER5. Informar zeros não significativos |
| 65 | IE | E | 2 | N | 1 - 1 | 14 | Inscrição Estadual do Emitente. *ER:* ER29. |
| 66 | IEST | E | 2 | N | 0 - 1 | 14 | Inscrição Estadual do Substituto Tributário. *ER:* ER29. |
| 67 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | <!-- p.25 -->Razão social ou Nome do emitente. *ER:* ER36. |
| 68 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 69 | **enderEmit** | **G** | **2** | | **1 - 1** | | **Endereço do emitente** |
| 70 | xLgr | E | 3 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 71 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 72 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 73 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 74 | cMun | E | 3 | N | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 75 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 76 | CEP | E | 3 | N | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 77 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 78 | fone | E | 3 | N | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 79 | **rem** | **G** | **1** | | **1 - 1** | | **Informações do Remetente. Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.** |
| 80 | CNPJ | CE | 2 | N | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 81 | CPF | CE | 2 | N | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 82 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do remetente ou ISENTO se remetente é contribuinte do ICMS isento <!-- p.26 -->de inscrição no cadastro de contribuintes do ICMS. Caso o remetente não seja contribuinte do ICMS não informar a tag. |
| 83 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou nome do remetente. *ER:* ER36. |
| 84 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 85 | fone | E | 2 | N | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 86 | **enderReme** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 87 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 88 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 89 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 90 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 91 | cMun | E | 3 | N | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 92 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 93 | CEP | E | 3 | N | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 94 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 95 | cPais | E | 3 | N | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 96 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 97 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER53. |
| 98 | **dest** | **G** | **1** | | **1 - 1** | | **Informações do Destinatário. Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.** |
| 99 | CNPJ | CE | 2 | N | 1 - 1 | 14 | <!-- p.27 -->Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 100 | CPF | CE | 2 | N | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 101 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do destinatário ou ISENTO se destinatário é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o destinatário não seja contribuinte do ICMS não informar o conteúdo. |
| 102 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome do destinatário. *ER:* ER36. |
| 103 | fone | E | 2 | N | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 104 | ISUF | E | 2 | N | 0 - 1 | 8 - 9 | Inscrição na SUFRAMA. *ER:* ER43. (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA) |
| 105 | **enderDest** | **G** | **2** | | **1 - 1** | | **Dados do endereço** |
| 106 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 107 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 108 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 109 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 110 | cMun | E | 3 | N | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 111 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | <!-- p.28 -->Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 112 | CEP | E | 3 | N | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 113 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 114 | cPais | E | 3 | N | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 115 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 116 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER53. |
| 117 | **origem** | **G** | **1** | | **0 - 1** | | **Informações do endereço da origem do serviço** |
| 118 | xLgr | E | 2 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 119 | nro | E | 2 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 120 | xCpl | E | 2 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 121 | xBairro | E | 2 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 122 | cMun | E | 2 | N | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 123 | xMun | E | 2 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 124 | CEP | E | 2 | N | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 125 | UF | E | 2 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 126 | fone | E | 2 | N | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 127 | **destino** | **G** | **1** | | **0 - 1** | | **Informações do endereço do destino do serviço** |
| 128 | xLgr | E | 2 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 129 | nro | E | 2 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 130 | xCpl | E | 2 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 131 | xBairro | E | 2 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 132 | cMun | E | 2 | N | 1 - 1 | 7 | <!-- p.29 -->Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 133 | xMun | E | 2 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 134 | CEP | E | 2 | N | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 135 | UF | E | 2 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 136 | fone | E | 2 | N | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 137 | **detGTV** | **G** | **1** | | **1 - 1** | | **Grupo de informações detalhadas da GTVe** |
| 138 | **infEspecie** | **G** | **2** | | **1 - n** | | **Informações das Espécies transportadas** |
| 139 | tpEspecie | E | 3 | N | 1 - 1 | 1 | Tipo da Espécie. *Dom.:* D10. 1 - Cédula<br>2 - Cheque<br>3 - Moeda<br>4 - Outros |
| 140 | vEspecie | E | 3 | N | 1 - 1 | 13, 2 | Valor Transportada em Espécie indicada. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 decimais. |
| 141 | tpNumerario | E | 3 | N | 1 - 1 | 1 | Nacionalidade do Numerário. *Dom.:* D10. 1 - Nacional<br>2 - Estrangeiro |
| 142 | xMoedaEstr | E | 3 | C | 0 - 1 | 2 - 60 | Nome da Moeda. *ER:* ER36. Informar somente se tipo de numerário for 2 - Estrangeiro |
| 143 | qCarga | E | 2 | N | 1 - 1 | 11, 4 | Quantidade de volumes/malotes. *ER:* ER21. 15 posições, sendo 11 inteiras e 4 decimais. |
| 144 | **infVeiculo** | **G** | **2** | | **1 - n** | | **Grupo de informações dos veículos utilizados no transporte de valores** |
| 145 | placa | E | 3 | C | 1 - 1 | 4 | Placa do veículo. *ER:* ER40. |
| 146 | UF | E | 3 | C | 1 - 1 | 2 | UF em que veículo está licenciado. *Dom.:* D11. Sigla da UF de licenciamento do veículo. |
| 147 | RNTRC | E | 3 | C | 0 - 1 | 8 | RNTRC do transportador. *ER:* ER44. |
| 148 | **autXML** | **G** | **1** | | **0 - 10** | | <!-- p.30 -->**Autorizados para download do XML do DF-e. Informar CNPJ ou CPF. Preencher os zeros não significativos.** |
| 149 | CNPJ | CE | 2 | N | 1 - 1 | 14 | CNPJ do autorizado. *ER:* ER5. Informar zeros não significativos |
| 150 | CPF | CE | 2 | N | 1 - 1 | 11 | CPF do autorizado. *ER:* ER9. Informar zeros não significativos |
| 151 | **infRespTec** | **G** | **1** | | **0 - 1** | | **Informações do Responsável Técnico pela emissão do DF-e** |
| 152 | CNPJ | E | 2 | N | 1 - 1 | 14 | CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico. *ER:* ER5. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| 153 | xContato | E | 2 | C | 1 - 1 | 2 - 60 | Nome da pessoa a ser contatada. *ER:* ER36. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome. |
| 154 | email | E | 2 | C | 1 - 1 | 1 - 60 | Email da pessoa jurídica a ser contatada. *ER:* ER53. |
| 155 | fone | E | 2 | N | 1 - 1 | 7 - 12 | Telefone da pessoa jurídica a ser contatada. *ER:* ER51. Preencher com o Código DDD + número do telefone. |
| # | -- X -- | - | 2 | - | 0 - 1 | - | Sequência XML |
| 156 | idCSRT | E | 2 | N | 1 - 1 | 3 | Identificador do código de segurança do responsável técnico. *ER:* ER35. Identificador do CSRT utilizado para geração do hash |
| 157 | hashCSRT | E | 2 | C | 1 - 1 | 20 | Hash do token do código de segurança do responsável técnico. O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. <!-- p.31 -->(Implementação em futura NT)<br><br>Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary |
| 158 | **infCTeSupl** | **G** | **0** | | **0 - 1** | | **Informações suplementares do CTV-e** |
| 159 | qrCodCTe | E | 1 | C | 1 - 1 | 50 - 1000 | Texto com o QR-Code impresso no DACTE. *ER:* ER58. |
| 160 | | E | 0 | C | 1 - 1 | | ds:Signature |

## Expressões Regulares

| Código | Expressão regular |
|---|---|
| ER1 | `(((20(([02468][048])\|([13579][26]))-02-29))\|(20[0-9][0-9])-((((0[1-9])\|(1[0-2]))-((0[1-9])\|(1\d)\|(2[0-8])))\|((((0[13578])\|(1[02]))-31)\|(((0[1,3-9])\|(1[0-2]))-(29\|30)))))T(20\|21\|22\|23\|[0-1]\d):[0-5]\d:[0-5]\d([\-,\+](0[0-9]\|10\|11):00\|([\+](12):00))` |
| ER2 | `[0-9]{2}` |
| ER3 | `[0-9]{7}` |
| ER4 | `[0-9]{44}` |
| ER5 | `[0-9]{14}` |
| ER6 | `[0-9]{6,14}` |
| ER7 | `[0-9]{3,14}` |
| ER8 | `[0-9]{0}\|[0-9]{14}` |
| ER9 | `[0-9]{11}` |
| ER10 | `[0-9]{3,11}` |
| ER11 | `(((20(([02468][048])\|([13579][26]))-02-29))\|(20[0-9][0-9])-((((0[1-9])\|(1[0-2]))-((0[1-9])\|(1\d)\|(2[0-8])))\|((((0[13578])\|(1[02]))-31)\|(((0[1,3-9])\|(1[0-2]))-(29\|30)))))` |
| ER12 | `0\|0\.[0-9]{2}\|[1-9]{1}[0-9]{0,2}(\.[0-9]{2})?` |
| ER13 | `0\|0\.[0-9]{3}\|[1-9]{1}[0-9]{0,2}(\.[0-9]{3})?` |
| ER14 | `[0-9]{1,3}(\.[0-9]{2,3})?` |
| ER15 | <!-- p.32 -->`0\.[0-9]{1}[1-9]{1}\|0\.[1-9]{1}[0-9]{1}\|[1-9]{1}[0-9]{0,2}(\.[0-9]{2})?` |
| ER16 | `0\|0\.[0-9]{3}\|[1-9]{1}[0-9]{0,7}(\.[0-9]{3})?` |
| ER17 | `0\.[1-9]{1}[0-9]{2}\|0\.[0-9]{2}[1-9]{1}\|0\.[0-9]{1}[1-9]{1}[0-9]{1}\|[1-9]{1}[0-9]{0,7}(\.[0-9]{3})?` |
| ER18 | `0\|0\.[0-9]{4}\|[1-9]{1}[0-9]{0,7}(\.[0-9]{4})?` |
| ER19 | `0\.[1-9]{1}[0-9]{3}\|0\.[0-9]{3}[1-9]{1}\|0\.[0-9]{2}[1-9]{1}[0-9]{1}\|0\.[0-9]{1}[1-9]{1}[0-9]{2}\|[1-9]{1}[0-9]{0,7}(\.[0-9]{4})?` |
| ER20 | `0\.[1-9]{1}[0-9]{5}\|0\.[0-9]{1}[1-9]{1}[0-9]{4}\|0\.[0-9]{2}[1-9]{1}[0-9]{3}\|0\.[0-9]{3}[1-9]{1}[0-9]{2}\|0\.[0-9]{4}[1-9]{1}[0-9]{1}\|0\.[0-9]{5}[1-9]{1}\|[1-9]{1}[0-9]{0,8}(\.[0-9]{6})?` |
| ER21 | `0\|0\.[0-9]{4}\|[1-9]{1}[0-9]{0,10}(\.[0-9]{4})?` |
| ER22 | `0\.[1-9]{1}[0-9]{3}\|0\.[0-9]{3}[1-9]{1}\|0\.[0-9]{2}[1-9]{1}[0-9]{1}\|0\.[0-9]{1}[1-9]{1}[0-9]{2}\|[1-9]{1}[0-9]{0,10}(\.[0-9]{4})?` |
| ER23 | `0\|0\.[0-9]{3}\|[1-9]{1}[0-9]{0,11}(\.[0-9]{3})?` |
| ER24 | `0\.[1-9]{1}[0-9]{2}\|0\.[0-9]{2}[1-9]{1}\|0\.[0-9]{1}[1-9]{1}[0-9]{1}\|[1-9]{1}[0-9]{0,11}(\.[0-9]{3})?` |
| ER25 | `0\|0\.[0-9]{4}\|[1-9]{1}[0-9]{0,11}(\.[0-9]{4})?` |
| ER26 | `0\.[1-9]{1}[0-9]{3}\|0\.[0-9]{3}[1-9]{1}\|0\.[0-9]{2}[1-9]{1}[0-9]{1}\|0\.[0-9]{1}[1-9]{1}[0-9]{2}\|[1-9]{1}[0-9]{0,11}(\.[0-9]{4})?` |
| ER27 | `0\|0\.[0-9]{2}\|[1-9]{1}[0-9]{0,12}(\.[0-9]{2})?` |
| ER28 | `0\.[0-9]{1}[1-9]{1}\|0\.[1-9]{1}[0-9]{1}\|[1-9]{1}[0-9]{0,12}(\.[0-9]{2})?` |
| ER29 | `[0-9]{2,14}` |
| ER30 | `[0-9]{0,14}\|ISENTO` |
| ER31 | `[0-9]{1,4}` |
| ER32 | `[1-9]{1}[0-9]{0,8}` |
| ER33 | `[0-9]{15}` |
| ER34 | `0\|[1-9]{1}[0-9]{0,2}` |
| ER35 | `[0-9]{3}` |
| ER36 | `[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}\|[!-ÿ]{1}` |
| ER37 | `[0-9]\.[0-9]{6}\|[1-8][0-9]\.[0-9]{6}\|90\.[0-9]{6}\|-[0-9]\.[0-9]{6}\|-[1-8][0-9]\.[0-9]{6}\|-90\.[0-9]{6}` |
| ER38 | `[0-9]\.[0-9]{6}\|[1-9][0-9]\.[0-9]{6}\|1[0-7][0-9]\.[0-9]{6}\|180\.[0-9]{6}\|-[0-9]\.[0-9]{6}\|-[1-9][0-9]\.[0-9]{6}\|-1[0-7][0-9]\.[0-9]{6}\|-180\.[0-9]{6}` |
| ER39 | `(([0-9]\|[1-9][0-9]\|1[0-9]{2}\|2[0-4][0-9]\|25[0-5])\.){3}([0-9]\|[1-9][0-9]\|1[0-9]{2}\|2[0-4][0-9]\|25[0-5])` |
| ER40 | <!-- p.33 -->`[A-Z]{2,3}[0-9]{4}\|[A-Z]{3,4}[0-9]{3}\|[A-Z0-9]{7}` |
| ER41 | `[0-9]{8}` |
| ER42 | `[0-9]{1}` |
| ER43 | `[0-9]{8,9}` |
| ER44 | `[0-9]{8}\|ISENTO` |
| ER45 | `CTe[0-9]{44}` |
| ER46 | `((HTTPS?\|https?)://.*\?chCTe=[0-9]{44}&tpAmb=[1-2](&sign=[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}\|[!-ÿ]{1})?)` |
| ER47 | `[1-9]{1}[0-9]{1,8}` |
| ER48 | `3\.(0[0-9]\|[1-9][0-9])` |
| ER49 | `[A-Z0-9]+` |
| ER50 | `[0-9]{1,6}` |
| ER51 | `[0-9]{7,12}` |
| ER52 | `[123567][0-9]([0-9][1-9]\|[1-9][0-9])` |
| ER53 | `[^@]+@[^\.]+\..+` |
| ER54 | `[0-9]{1,15}` |
| ER55 | `[0-9]{12}` |
| ER56 | `(([0-1][0-9])\|([2][0-3])):([0-5][0-9]):([0-5][0-9])` |
| ER57 | `3\.00` |
| ER58 | `((HTTPS?\|https?)://.*\?chCTe=[0-9]{44}&tpAmb=[1-2](&sign=[!-ÿ]{1}[ -ÿ]{0,}[!-ÿ]{1}\|[!-ÿ]{1})?)` |

## Domínio

| Código | Valores |
|---|---|
| D1 | 1, 2 |
| D2 | 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53 |
| D3 | 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 41, 42, 43, 50, 51, 52, 53, 90, 91, 93, 94, 95 |
| D4 | 67 |
| D5 | 64 |
| D6 | <!-- p.34 -->57, 67 |
| D7 | 57 |
| D8 | 01, 04 |
| D9 | 1, 2, 3, 4, 5, 6, 7 |
| D10 | 1, 2, 3, 4 |
| D11 | AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO, EX |
| D12 | AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO |
| D13 | 01, 06 |
| D14 | 4 |
| D15 | 1, 2, 7, 8 |
| D16 | 9 |
| D17 | 1, 2, 9 |
| D18 | 0, 1 |
| D19 | 2 |
| D20 | 1, 3, 4, 5, 7, 8 |
| D21 | 1 |
| D22 | 0, 1, 2, 3, 4 |
| D23 | 0, 1, 2, 3 |
| D24 | 4 |
| D25 | 1, 2, 3 |
| D26 | 00, 01, 02, 03, 04, 05 |
| D27 | 00, 10, 59, 65, 99 |
| D28 | 1, 5, 7, 8 |
| D29 | 6, 7, 8 |
| D30 | 4, 5 |
| D31 | 1, 2, 3, 4, 5, 6 |
| D32 | <!-- p.35 -->00 |
| D33 | 20 |
| D34 | 40, 41, 51 |
| D35 | 60 |
| D36 | 90 |
| D37 | 101, 102, 103, 104, 105, 106, 107, 108, 201, 302, 303, 304, 305, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 501, 502, 503, 504, 505, 506, 507, 508, 509, 601, 602, 603, 604, 605, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 716, 717, 718, 719, 720, 721, 722, 801, 802, 901, 902, 903, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1101, 1102, 1103, 1104, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1302, 1303, 1304, 1305, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1601, 1701, 1702, 1703, 1704, 1705, 1706, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1801, 1901, 2001, 2002, 2003, 2101, 2201, 2301, 2401, 2501, 2502, 2503, 2504, 2601, 2701, 2801, 2901, 3001, 3101, 3201, 3301, 3401, 3501, 3601, 3701, 3801, 3901, 4001 |
| D38 | 07, 08, 09, 10, 11, 12, 13 |
| D39 | 01, 1B, 02, 2D, 2E, 04, 06, 07, 08, 8B, 09, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 55 |
| D40 | 01, 02, 03, 04 |
| D41 | 01, 02, 03, 04, 05, 06 |
| D42 | 0, 3 |
