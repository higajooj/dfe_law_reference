# 3.8. Data e Hora de Emissão e Outros Horários

Todos os campos que representam Data e Hora no leiaute das mensagens do CTe seguem o formato UTC completo com a informação do TimeZone. Este tipo de representação de dados é tecnicamente adequado para a representação do horário para um País com dimensões continentais como o Brasil.

<!-- p.29 -->

Serão aceitos os horários de qualquer região do mundo (faixa de horário UTC de -11 a +12) e não apenas as faixas de horário do Brasil.

Exemplo: no formato UTC para os campos de Data-Hora, "TZD" pode ser -02:00 (Fernando de Noronha), -03:00 (Brasília) ou -04:00 (Manaus), no horário de verão serão -01:00, -02:00 e -03:00.

Exemplo: "2010-08-19T13:00:15-03:00".
