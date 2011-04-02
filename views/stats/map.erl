  fun({Doc}) ->
    S = binary_to_list(proplists:get_value(<<"state">>, Doc)),

    %% C = proplists:get_value(<<"count">>, Doc),
    C = case proplists:get_value(<<"count">>, Doc) of
      C1 when is_integer(C1) -> C1;
      C1 when is_list(C1) -> list_to_integer(C1);
      C1 when is_binary(C1) -> list_to_integer(binary_to_list(C1));
      C1 -> 0
    end,

    Emit(list_to_binary("entry " ++ S), 1),
    Emit(list_to_binary("count " ++ S), C)
  end.


