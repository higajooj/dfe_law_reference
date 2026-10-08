<!-- p.10 -->
# 3. Emissor de Nota Fiscal no Site do Fisco

Algumas SEFAZ disponibilizam no seu site a possibilidade de emissão da Nota Fiscal Avulsa e seguem algumas características desta aplicação:
- Série da NF-e de uso exclusivo das SEFAZ, na faixa [890 a 899];
- Processo de Emissão = 1 (Emissão de NFA-e Avulsa no site do Fisco);
- Chave de Acesso com CNPJ da SEFAZ;
- Numeração das NFA-e sequencial pela SEFAZ (independentemente do Emitente);
- Emitente identificado pelo CNPJ/CPF no XML da NF-e;
- Preenchimento do grupo de informações “avulsa” no XML da NF-e;
- Assinatura do XML com Certificado Digital da SEFAZ.

Nota: Observado que o uso do CNPJ da SEFAZ na Chave de Acesso traz inconvenientes operacionais para as Empresas e para o Fisco, que acabam questionando sobre este CNPJ, que é diferente do CNPJ do Emitente que consta no XML da NF-e.
