<!-- p.48 -->

# 3.6. Evento Ator Interessado na NF-e – Transportador

Um dos grandes desafios do projeto Nota Fiscal Eletrônica é prover para os atores envolvidos nos processos da NF-e informações de seu interesse de forma eficiente e confiável.

No momento da emissão da NF-e, muitas vezes o emitente ainda não definiu o Transportador que ficará responsável pela entrega da mercadoria, impedindo, portanto, que essa informação conste em campo específico da NF-e (tag: CNPJ/CPF, id: X04/X05), ou mesmo no grupo de pessoas autorizadas a acessar o XML da NF-e (tag: autXML, Id: GA01). Em vários outros casos, o responsável pelo transporte é o destinatário e, nesses casos, o Emitente não tem condições de informar o Transportador no XML da NF-e.

O objetivo deste evento, publicado na NT 2020.007, é permitir que o Emitente informe a identificação do Transportador a qualquer momento, como uma das pessoas autorizadas a acessar o XML da NF-e.

No caso em que o transporte não é de responsabilidade do Emitente, o Destinatário poderá gerar o evento, com o mesmo objetivo de autorizar que o Transportador fique autorizado a acessar o XML da NF-e.

Nos casos de Redespacho ou Subcontratação, definido o transportador contratado, este poderá também autorizar outro transportador participante da mesma operação de transporte a acessar o XML da NF-e.

O Transportador precisa dos dados da NF-e para instrumentalizar seus processos de transporte e, a partir da geração deste evento, possibilita o transportador em buscar o XML da NF-e no Ambiente Nacional, por meio do Web Service de Distribuição de DF-e de Interesse dos Atores da NF-e conforme documentado na NT2014.002.
