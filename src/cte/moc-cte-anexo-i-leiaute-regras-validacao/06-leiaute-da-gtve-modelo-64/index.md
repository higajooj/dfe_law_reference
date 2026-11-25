<!-- p.100 -->

# 6. Leiaute da GTVe (Modelo 64)

Legendas coluna **Ele** (Elemento): A – Atributo, E – Elemento, G – Grupo, ES – Elemento da Sequência, CE – Choice Element (escolha entre elementos), CG – Choice Group (Escolha entre grupos).

Legendas coluna **Tipo**: N – Numérico, C – Caracteres, D – Data.

ERXX – Expressão Regular (ver tabela de expressões regulares).

DXX – Valores de Domínio (ver tabela de valores de domínio).

Ocorr: 0 - 1 (opcional sem repetição), 1 – 1 (obrigatório sem repetição), 0 – n (opcional com múltiplas ocorrências), 1 – n (obrigatório com múltiplas ocorrências).

As subseções deste capítulo estão em:

- [6.1. Expressões Regulares e Valores de Domínio do Modelo 64](06-01-expressoes-regulares-e-valores-de-dominio-do-modelo-64.md)

Na coluna **Descrição/Observação**, os códigos da coluna de domínio e de expressão regular da fonte aparecem como *Dom.:* e *ER:*.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | versao | A | 0 | C | 1 - 1 | | Versão do leiaute. *ER:* ER56. |
| 2 | **infCte** | **G** | **0** | | **1 - 1** | | **Informações do CTe do tipo GTVe** |
| 3 | versao | A | 1 | C | 1 - 1 | | Versão do leiaute. *ER:* ER56. Ex: "4.00" |
| 4 | Id | A | 1 | C | 1 - 1 | 47 | Identificador da tag a ser assinada. *ER:* ER45. Informar a chave de acesso da GTVe e precedida do literal "CTe" |
| 5 | **ide** | **G** | **1** | | **1 - 1** | | **Identificação da GTVe** |
| 6 | cUF | E | 2 | N | 1 - 1 | 2 | Código da UF do emitente da GTVe. *Dom.:* D2. Utilizar a Tabela do IBGE. |
| 7 | cCT | E | 2 | C | 1 - 1 | 8 | Código numérico que compõe a Chave de Acesso. *ER:* ER41. Número aleatório gerado pelo emitente para cada CTe, com o objetivo de evitar acessos indevidos ao documento. |
| 8 | CFOP | E | 2 | C | 1 - 1 | 4 | Código Fiscal de Operações e Prestações. *ER:* ER51. |
| 9 | natOp | E | 2 | C | 1 - 1 | 1 - 60 | Natureza da Operação. *ER:* ER36. |
| 10 | mod | E | 2 | N | 1 - 1 | 2 | Modelo do documento fiscal. *Dom.:* D5. Utilizar o código 64 para identificação do CTe Guia de Transporte de Valores |
| 11 | serie | E | 2 | C | 1 - 1 | 1 - 3 | Série da GTVe. *ER:* ER34. Preencher com "0" no caso de série única |
| 12 | nCT | E | 2 | C | 1 - 1 | 1 - 9 | Número da GTVe. *ER:* ER32. |
| 13 | dhEmi | E | 2 | C | 1 - 1 | 21 | Data e hora de emissão da GTVe. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 14 | tpImp | E | 2 | N | 1 - 1 | 1 | Formato de impressão do DACTE. *Dom.:* D1. Preencher com:<br>1 - Retrato;<br>2 - Paisagem. |
| 15 | tpEmis | E | 2 | N | 1 - 1 | 1 | Forma de emissão da GTVe. *Dom.:* D15. Preencher com:<br>1 - Normal;<br>2- Contingência offline<br>7 - Autorização pela SVC-RS;<br>8 - Autorização pela SVC-SP |
| 16 | cDV | E | 2 | C | 1 - 1 | 1 | <!-- p.101 -->Digito Verificador da chave de acesso da GTVe. *ER:* ER42. Informar o dígito de controle da chave de acesso do CTe, que deve ser calculado com a aplicação do algoritmo módulo 11 (base 2,9) da chave de acesso. |
| 17 | tpAmb | E | 2 | N | 1 - 1 | 1 | Tipo do Ambiente. *Dom.:* D1. Preencher com:<br>1 - Produção;<br>2 - Homologação |
| 18 | tpCTe | E | 2 | N | 1 - 1 | 1 | Tipo da GTVe. *Dom.:* D14. Preencher com:<br>4 - GTVe |
| 19 | verProc | E | 2 | C | 1 - 1 | 1 - 20 | Versão do processo de emissão. *ER:* ER36. Informar a versão do aplicativo emissor de CTe. |
| 20 | cMunEnv | E | 2 | C | 1 - 1 | 7 | Código do Município de envio da GTVe (de onde o documento foi transmitido). *ER:* ER3. Utilizar a tabela do IBGE. Informar 9999999 para as operações com o exterior. |
| 21 | xMunEnv | E | 2 | C | 1 - 1 | 2 - 60 | Nome do Município de envio da GTVe (de onde o documento foi transmitido). *ER:* ER36. Informar PAIS/Município para as operações com o exterior. |
| 22 | UFEnv | E | 2 | C | 1 - 1 | 2 | Sigla da UF de envio da GTVe (de onde o documento foi transmitido). *Dom.:* D11. Informar 'EX' para operações com o exterior. |
| 23 | modal | E | 2 | N | 1 - 1 | 2 | Modal da GTVe. *Dom.:* D13. Preencher com:<br>01-Rodoviário<br>06-Multimodal |
| 24 | tpServ | E | 2 | N | 1 - 1 | 1 | Tipo do Serviço. *Dom.:* D16. Preencher com:<br><br>9 - GTV |
| 25 | indIEToma | E | 2 | N | 1 - 1 | 1 | Indicador da IE do tomador:<br>1 – Contribuinte ICMS;<br>2 – Contribuinte isento de inscrição;<br>9 – Não Contribuinte. *Dom.:* D17. Aplica-se ao tomador que for indicado no toma3 ou toma4. |
| 26 | dhSaidaOrig | E | 2 | C | 1 - 1 | 21 | Data e hora de saída da origem. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 27 | dhChegadaDest | E | 2 | C | 1 - 1 | 21 | Data e hora de chegada no destino. *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
| 28 | toma | CG | 2 | | 1 - 1 | | Indicador do "papel" do tomador do serviço no GTVe |
| 29 | toma | E | 3 | N | 1 - 1 | 1 | Tomador do Serviço. *Dom.:* D18. Preencher com:<br>0-Remetente;<br>1-Destinatário |
| 30 | tomaTerceiro | CG | 2 | | 1 - 1 | | Indicador do "papel" do tomador do serviço no CTV-e |
| 31 | toma | E | 3 | N | 1 - 1 | 1 | Tomador do Serviço. *Dom.:* D14. Preencher com:<br>4 - Outros<br><!-- p.102 -->Obs: Informar os dados cadastrais do tomador do serviço |
| 32 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 33 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 34 | IE | E | 3 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do tomador ou ISENTO se tomador é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o tomador não seja contribuinte do ICMS não informar o conteúdo. |
| 35 | xNome | E | 3 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome. *ER:* ER36. |
| 36 | xFant | E | 3 | C | 0 - 1 | 2 - 60 | Nome Fantasia. *ER:* ER36. |
| 37 | fone | E | 3 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 38 | enderToma | G | 3 | | 1 - 1 | | Dados do endereço |
| 39 | xLgr | E | 4 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 40 | nro | E | 4 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 41 | xCpl | E | 4 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 42 | xBairro | E | 4 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 43 | cMun | E | 4 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 44 | xMun | E | 4 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 45 | CEP | E | 4 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 46 | UF | E | 4 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 47 | cPais | E | 4 | C | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 48 | xPais | E | 4 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 49 | email | E | 3 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER52. |
| # | --- x --- | - | 2 | - | 0 - 1 | | Sequência XML |
| 51 | dhCont | ES | 2 | C | 1 - 1 | 21 | Data e Hora da entrada em contingência. *ER:* ER1. Informar a data e hora no formato AAAA-MM-DDTHH:MM:SS |
| 52 | xJust | ES | 2 | C | 1 - 1 | 15 - 256 | Justificativa da entrada em contingência. *ER:* ER36. |
| 53 | **compl** | **G** | **1** | | **0 - 1** | | **Dados complementares da GTVe para fins operacionais ou comerciais** |
| 54 | xCaracAd | E | 2 | C | 0 - 1 | 1 - 15 | Característica adicional do transporte. *ER:* ER36. Texto livre: REENTREGA; DEVOLUÇÃO; REFATURAMENTO; etc |
| 55 | xCaracSer | E | 2 | C | 0 - 1 | 1 - 30 | <!-- p.103 -->Característica adicional do serviço. *ER:* ER36. Texto livre: ENTREGA EXPRESSA; LOGÍSTICA REVERSA; CONVENCIONAL; EMERGENCIAL; etc |
| 56 | xEmi | E | 2 | C | 0 - 1 | 1 - 20 | Funcionário emissor da GTVe. *ER:* ER36. |
| 57 | xObs | E | 2 | C | 0 - 1 | 1 - 2000 | Observações Gerais. *ER:* ER36. |
| 58 | ObsCont | G | 2 | | 0 - 10 | | Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto |
| 59 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 60 | xTexto | E | 3 | C | 1 - 1 | 1 - 160 | Conteúdo do campo. *ER:* ER36. |
| 61 | ObsFisco | G | 2 | | 0 - 10 | | Campo de uso livre do contribuinte. Informar o nome do campo no atributo xCampo e o conteúdo do campo no XTexto |
| 62 | xCampo | A | 3 | C | 1 - 1 | 1 - 20 | Identificação do campo. *ER:* ER36. |
| 63 | xTexto | E | 3 | C | 1 - 1 | 1 - 60 | Conteúdo do campo. *ER:* ER36. |
| 64 | **emit** | **G** | **1** | | **1 - 1** | | **Identificação do Emitente da GTVe** |
| 65 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ do emitente. *ER:* ER5. Informar zeros não significativos |
| 66 | IE | E | 2 | C | 1 - 1 | 14 | Inscrição Estadual do Emitente. *ER:* ER29. |
| 67 | IEST | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual do Substituto Tributário. *ER:* ER29. |
| 68 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou Nome do emitente. *ER:* ER36. |
| 69 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 70 | enderEmit | G | 2 | | 1 - 1 | | Endereço do emitente |
| 71 | xLgr | E | 3 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 72 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 73 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 74 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 75 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 76 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 77 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 78 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 79 | fone | E | 3 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 80 | **rem** | **G** | **1** | | **1 - 1** | | **Informações do Remetente. Poderá não ser informado para os CTe de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.** |
| 81 | CNPJ | CE | 2 | C | 1 - 1 | 14 | <!-- p.104 -->Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 82 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 83 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do remetente ou ISENTO se remetente é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o remetente não seja contribuinte do ICMS não informar a tag. |
| 84 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão social ou nome do remetente. *ER:* ER36. |
| 85 | xFant | E | 2 | C | 0 - 1 | 2 - 60 | Nome fantasia. *ER:* ER36. |
| 86 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 87 | enderReme | G | 2 | | 1 - 1 | | Dados do endereço |
| 88 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 89 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 90 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 91 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 92 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 93 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 94 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 95 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 96 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 97 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 98 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER52. |
| 99 | **dest** | **G** | **1** | | **1 - 1** | | **Informações do Destinatário. Poderá não ser informado para os CTe de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.** |
| 100 | CNPJ | CE | 2 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Em caso de empresa não estabelecida no Brasil, será informado o CNPJ com zeros. Informar os zeros não significativos. |
| 101 | CPF | CE | 2 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 102 | IE | E | 2 | C | 0 - 1 | 14 | Inscrição Estadual. *ER:* ER30. Informar a IE do destinatário ou ISENTO se destinatário é contribuinte do ICMS isento de inscrição no cadastro de contribuintes do ICMS. Caso o <!-- p.105 -->destinatário não seja contribuinte do ICMS não informar o conteúdo. |
| 103 | xNome | E | 2 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome do destinatário. *ER:* ER36. |
| 104 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 105 | ISUF | E | 2 | C | 0 - 1 | 8 - 9 | Inscrição na SUFRAMA. *ER:* ER43. (Obrigatório nas operações com as áreas com benefícios de incentivos fiscais sob controle da SUFRAMA) |
| 106 | enderDest | G | 2 | | 1 - 1 | | Dados do endereço |
| 107 | xLgr | E | 3 | C | 1 - 1 | 2 - 255 | Logradouro. *ER:* ER36. |
| 108 | nro | E | 3 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 109 | xCpl | E | 3 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 110 | xBairro | E | 3 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 111 | cMun | E | 3 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. Informar 9999999 para operações com o exterior. |
| 112 | xMun | E | 3 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. Informar EXTERIOR para operações com o exterior. |
| 113 | CEP | E | 3 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar os zeros não significativos |
| 114 | UF | E | 3 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D11. Informar EX para operações com o exterior. |
| 115 | cPais | E | 3 | C | 0 - 1 | 1 - 4 | Código do país. *ER:* ER31. Utilizar a tabela do BACEN |
| 116 | xPais | E | 3 | C | 0 - 1 | 2 - 60 | Nome do país. *ER:* ER36. |
| 117 | email | E | 2 | C | 0 - 1 | 1 - 60 | Endereço de email. *ER:* ER52. |
| 118 | **origem** | **G** | **1** | | **0 - 1** | | **Informações do endereço da origem do serviço** |
| 119 | xLgr | E | 2 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 120 | nro | E | 2 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 121 | xCpl | E | 2 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 122 | xBairro | E | 2 | C | 1 - 1 | 2 - 60 | Bairro. *ER:* ER36. |
| 123 | cMun | E | 2 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 124 | xMun | E | 2 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 125 | CEP | E | 2 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 126 | UF | E | 2 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 127 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 128 | **destino** | **G** | **1** | | **0 - 1** | | **Informações do endereço do destino do serviço** |
| 129 | xLgr | E | 2 | C | 1 - 1 | 2 - 60 | Logradouro. *ER:* ER36. |
| 130 | nro | E | 2 | C | 1 - 1 | 1 - 60 | Número. *ER:* ER36. |
| 131 | xCpl | E | 2 | C | 0 - 1 | 1 - 60 | Complemento. *ER:* ER36. |
| 132 | xBairro | E | 2 | C | 1 - 1 | 2 - 60 | <!-- p.106 -->Bairro. *ER:* ER36. |
| 133 | cMun | E | 2 | C | 1 - 1 | 7 | Código do município (utilizar a tabela do IBGE). *ER:* ER3. |
| 134 | xMun | E | 2 | C | 1 - 1 | 2 - 60 | Nome do município. *ER:* ER36. |
| 135 | CEP | E | 2 | C | 0 - 1 | 8 | CEP. *ER:* ER41. Informar zeros não significativos |
| 136 | UF | E | 2 | C | 1 - 1 | 2 | Sigla da UF. *Dom.:* D12. |
| 137 | fone | E | 2 | C | 0 - 1 | 6 - 14 | Telefone. *ER:* ER6. |
| 138 | **detGTV** | **G** | **1** | | **1 - 1** | | **Grupo de informações detalhadas da GTVe** |
| 139 | infEspecie | G | 2 | | 1 - n | | Informações das Espécies transportadas |
| 140 | tpEspecie | E | 3 | N | 1 - 1 | 1 | Tipo da Espécie. *Dom.:* D10. 1 - Cédula<br>2 - Cheque<br>3 - Moeda<br>4 - Outros |
| 141 | vEspecie | E | 3 | C | 1 - 1 | 13, 2 | Valor Transportada em Espécie indicada. *ER:* ER27. 15 posições, sendo 13 inteiras e 2 casas decimais. |
| 142 | tpNumerario | E | 3 | N | 1 - 1 | 1 | Nacionalidade do Numerário. *Dom.:* D1. 1 - Nacional<br>2 - Estrangeiro |
| 143 | xMoedaEstr | E | 3 | C | 0 - 1 | 2 - 60 | Nome da Moeda. *ER:* ER36. Informar somente se tipo de numerário for 2 - Estrangeiro |
| 144 | qCarga | E | 2 | C | 1 - 1 | 11, 4 | Quantidade de volumes/malotes. *ER:* ER21. 15 posições, sendo 11 inteiras e 4 casas decimais. |
| 145 | infVeiculo | G | 2 | | 1 - n | | Grupo de informações dos veículos utilizados no transporte de valores |
| 146 | placa | E | 3 | C | 1 - 1 | 4 | Placa do veículo. *ER:* ER40. |
| 147 | UF | E | 3 | C | 0 - 1 | 2 | UF em que veículo está licenciado. *Dom.:* D11. Sigla da UF de licenciamento do veículo. |
| 148 | RNTRC | E | 3 | C | 0 - 1 | 8 | RNTRC do transportador. *ER:* ER44. |
| 149 | **autXML** | **G** | **1** | | **0 - 10** | | **Autorizados para download do XML do DF-e. Informar CNPJ ou CPF. Preencher os zeros não significativos.** |
| 150 | CNPJ | CE | 2 | C | 1 - 1 | 14 | CNPJ do autorizado. *ER:* ER5. Informar zeros não significativos |
| 151 | CPF | CE | 2 | C | 1 - 1 | 11 | CPF do autorizado. *ER:* ER9. Informar zeros não significativos |
| 152 | **infRespTec** | **G** | **1** | | **0 - 1** | | **Informações do Responsável Técnico pela emissão do DF-e** |
| 153 | CNPJ | E | 2 | C | 1 - 1 | 14 | CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico. *ER:* ER5. Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| 154 | xContato | E | 2 | C | 1 - 1 | 2 - 60 | Nome da pessoa a ser contatada. *ER:* ER36. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do<!-- p.107 --> documento fiscal eletrônico. No caso de pessoa física, informar o respectivo nome. |
| 155 | email | E | 2 | C | 1 - 1 | 1 - 60 | Email da pessoa jurídica a ser contatada. *ER:* ER52. |
| 156 | fone | E | 2 | C | 1 - 1 | 7 - 12 | Telefone da pessoa jurídica a ser contatada. *ER:* ER50. Preencher com o Código DDD + número do telefone. |
| # | --- x --- | - | 0 | - | 0 - 1 | | Sequência XML |
| 158 | idCSRT | ES | 2 | C | 1 - 1 | 3 | Identificador do código de segurança do responsável técnico. *ER:* ER35. Identificador do CSRT utilizado para geração do hash |
| 159 | hashCSRT | ES | 2 | C | 1 - 1 | 20 | Hash do token do código de segurança do responsável técnico. O hashCSRT é o resultado das funções SHA-1 e base64 do token CSRT fornecido pelo fisco + chave de acesso do DF-e. (Implementação em futura NT)<br><br>Observação: 28 caracteres são representados no schema como 20 bytes do tipo base64Binary |
| 160 | **infCTeSupl** | **G** | **0** | | **0 - 1** | | **Informações suplementares da GTVe** |
| 161 | qrCodCTe | E | 1 | C | 1 - 1 | 50 - 1000 | Texto com o QR-Code impresso no DACTE. *ER:* ER73. |
| 162 | | E | 0 | C | 1 - 1 | | ds:Signature |
