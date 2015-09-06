require 'rails_helper'

RSpec.describe Operator, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  it { should validate_presence_of :description }
  it { should validate_presence_of :name }

  # it 'validates presence of name' do
  #   expect(Operator.new(description: '--operator--')).to_not be_valid
  # end
  #
  # it 'validates presence of description' do
  #   expect(Operator.new(name: '--operator name--')).to_not be_valid
  # end
end
