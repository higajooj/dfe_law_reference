<!-- p.05 -->

# 1 Resumo

Um dos grandes desafios do projeto Conhecimento de Transporte Eletrônico é prover para os atores envolvidos nos processos do CT-e<mark>/ CT-eOS/GTV-e</mark> informações de seu interesse de forma eficiente e confiável.

Esta nota técnica tem como objetivo a apresentação de um novo *Web Service* denominado CTeDistribuicaoDFe que disponibilizará para os atores do CT-e<mark>/ CT-eOS/GTV-e</mark> informações e documentos fiscais eletrônicos de seu interesse. A distribuição será realizada para emitentes, remetentes, destinatários, expedidores, recebedores, tomadores e terceiros informados no conteúdo do CT-e<mark>/ CT-eOS/GTV-e</mark> respectivamente no grupo do Emitente (tag: emit), nos grupos do Remetente (tag: rem), Destinatário (tag: dest), Expedidor (tag: exped), Recebedor (tag: receb), Tomador (tag: toma4) e no grupo de pessoas autorizadas a acessar o XML (tag:autXML).

Visando a preservação do sigilo fiscal dos documentos fiscais eletrônicos relacionados no CT-e<mark>/ CT-eOS/GTV-e</mark> no grupo de documentos originários (infDoc), documentos anteriores (docAntEle) ou refCTe, este webservice deverá manipular o XML retornado alterando as chaves de acesso de CT-e/NF-e relacionadas pelo literal 99999999999999999999999999999999999999999999 conforme decisão do ENCAT, somente quando o ator solicitante da requisição ao serviço for um dos autorizados no grupo autXML. Para todos os demais atores, o XML retornado deverá ser o original sem alteração.
