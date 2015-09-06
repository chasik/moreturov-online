FactoryGirl.define do
  factory :operator do
    name "OperatorName"
    description "OperatorDescription"
  end

  factory :invalid_operator, class: 'Operator' do
    name nil
    description nil
  end
end
