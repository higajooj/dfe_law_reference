<!-- p.10 -->
# 8.1. Leiaute da NF-e (Modelo 55 e 65)

**Grupo B. Identificação da Nota Fiscal eletrônica**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 11 | B07 | serie | Série do Documento Fiscal | E | B01 | N | 1-1 | 1 – 3 | Série do Documento Fiscal, preencher com zeros na hipótese de a NF-e não possuir série.<br>Série na faixa:<br>- [000-889]: Aplicativo do Contribuinte; Emitente=CNPJ; Assinatura pelo e-CNPJ do contribuinte (procEmi<>1,2);<br>- [120-999]: Aplicativo NFF; Emitente=CNPJ/CPF; Assinatura pelo e-CNPJ da PROCERGS (procEmi=3);<br>- [890-899]: Emissão no site do Fisco (NFA-e - Avulsa); Emitente= CNPJ / CPF; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1);<br>- [900-909]: Emissão no site do Fisco (NFA-e); Emitente= CNPJ; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1), ou Assinatura pelo e-CNPJ do contribuinte (procEmi=2);<br>- [910-919]: Emissão no site do Fisco (NFA-e); Emitente= CPF; Assinatura pelo e-CNPJ da SEFAZ (procEmi=1), ou Assinatura pelo e-CPF do contribuinte (procEmi=2);<br>- [920-969]: Aplicativo do Contribuinte; Emitente=CPF; Assinatura pelo e-CPF do contribuinte (procEmi<>1,2); (Atualizado NT 2018/001)<br>- [970-979]: Emissão por Provedor de Assinatura e Autorização – PAA, Emitente CPF<br>- [980-989]: Emissão por Provedor de Assinatura e Autorização – PAA, Emitente CNPJ |
| 29a | B26 | procEmi | Processo de emissão da NF-e | E | B01 | N | 1-1 | 1 | 0=Emissão de NF-e com aplicativo do contribuinte;<br>1=Emissão de NF-e avulsa pelo Fisco;<br>2=Emissão de NF-e avulsa, pelo contribuinte com seu certificado digital, através do site do Fisco;<br>3=Emissão NF-e pelo contribuinte com aplicativo fornecido pelo Fisco;<br>4=Emissão de NF-e por Provedor de Assinatura e Autorização - PAA. |

**Grupo GA. Autorização para obter XML**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **97a.1** | **GA01** | **autXML** | **Pessoas autorizadas a acessar o XML da NF-e** | **G** | **A01** | | **0-10** | | |
| 97a.2 | GA02 | CNPJ | CNPJ Autorizado | CE | GA01 | N | 1-1 | 14 | Informar CNPJ ou CPF. Preencher os zeros não significativos.<br>**Observação:** No caso de emissão de Nota Fiscal pelo PAA (nSerie=[970-989]), este campo pode ser informado com o CNPJ do PAA. |
| 97a.3 | GA03 | CPF | CPF Autorizado | CE | GA01 | N | 1-1 | 11 | |

<!-- p.11 -->

**Grupo ZG. Informações do PAA**

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **423l** | **ZG01** | **infPAA** | **Grupo de Informação do Provedor de Assinatura e Autorização** | **G** | **A01** | | **0-1** | | **Uso exclusivo para NF-e gerada por Provedor de Assinatura e Autorização - PAA conforme legislação vigente.** |
| 423l.1 | ZG02 | CNPJPAA | CNPJ do Provedor de Assinatura e Autorização | E | ZG01 | C | 1-1 | 14 | |
| 423l.1 | ZG03 | PAASignature | Assinatura RSA do Emitente para DF-e gerados por PAA | G | ZG01 | | 1-1 | | **Estrutura simplificada do padrão XMLDSig para a PAA** |
| 423l.1 | ZG04 | SignatureValue | Assinatura digital padrão RSA | E | ZG03 | C | 1-1 | | ~~Converter o atributo Id da NFe para array de bytes e assinar com a chave privada do RSA com algoritmo SHA1 gerando um valor no formato base64.~~<br>Gerar o hash do valor do atributo Id com algoritmo SHA1 e assinar com a chave privada RSA, gerando um valor no formato base64. |
| 423l.1 | ZG05 | RSAKeyValue | Chave Pública no padrão XML RSA Key | G | ZG03 | | 1-1 | | |
| 423l.1 | ZG06 | Modulus | | E | ZG05 | C | 1-1 | | |
| 423l.1 | ZG07 | Exponent | | E | ZG05 | C | 1-1 | | Informar “AQAB” |

> **Revogado/Descontinuado:** o texto riscado da observação do campo ZG04 (SignatureValue) está riscado na NT original.
