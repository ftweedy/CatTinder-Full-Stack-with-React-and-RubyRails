require 'rails_helper'

RSpec.describe Cat, type: :model do
    class Cat < ApplicationRecord
      #Here is the new line of code
      validates :name, presence: true
    end
  it "should validate name" do
    cat = Cat.create
    expect(cat.errors[:name]).to_not be_empty
  end
end
