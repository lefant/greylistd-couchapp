fun({Doc}) ->
    S = proplists:get_value(<<"state">>, Doc),
    %% C = proplists:get_value(<<"count">>, Doc),

    C = case proplists:get_value(<<"count">>, Doc) of
      C1 when is_integer(C1) -> C1;
      C1 when is_list(C1) -> list_to_integer(C1);
      C1 when is_binary(C1) -> list_to_integer(binary_to_list(C1));
      C1 -> 0
    end,

    Emit(<<"items total">>, 1),
    Emit(<<"count total">>, C),

    case S of
      <<"white">> ->
        Emit(<<"items white">>, 1),
        Emit(<<"count white">>, C);
      <<"grey">> ->
        Emit(<<"items grey">>, 1),
        Emit(<<"count grey">>, C)
    end
end.
