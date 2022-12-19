using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class ModifyImage2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_ProductDetails_ProductDetailId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_ProductDetailId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "ProductDetailId",
                table: "Images");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "dd15ec8a-bd1e-42a0-ba43-dfc6e28aa88a");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "ab203370-2951-458d-b1cb-397615525431");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b9eca7f3-c19f-4b6c-aba0-bf67e85f6582", "AQAAAAEAACcQAAAAEF6Nf5R08h7Vx0uynk/eOSFoZcb7+LRAgqjT6eQ5XXOT2OoUqgW7OUabPoh4L/2wqg==", "493d49ed-7bd1-4d42-8c1a-096283dcc0fd" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 19, 11, 56, 28, 544, DateTimeKind.Local).AddTicks(867));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 19, 11, 56, 28, 544, DateTimeKind.Local).AddTicks(880));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 19, 11, 56, 28, 544, DateTimeKind.Local).AddTicks(881));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 19, 11, 56, 28, 544, DateTimeKind.Local).AddTicks(882));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductDetailId",
                table: "Images",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "c34e072e-2679-475a-a632-01f87b4eb077");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "9377555d-03d2-4491-8d62-de96fc75c810");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "87093e2d-39aa-4194-a2aa-25c0020355e4", "AQAAAAEAACcQAAAAEA395vTLv7bOnZmazOLNlZQXS/0RvY/K/JsqbimNpCE7IqT47m9t9qvb8v0i6w7Row==", "b80d74aa-5d3e-42e7-b761-cda3b2ed6bb5" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 16, 53, 26, 504, DateTimeKind.Local).AddTicks(8335));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 16, 53, 26, 504, DateTimeKind.Local).AddTicks(8348));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 16, 53, 26, 504, DateTimeKind.Local).AddTicks(8350));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 15, 16, 53, 26, 504, DateTimeKind.Local).AddTicks(8352));

            migrationBuilder.CreateIndex(
                name: "IX_Images_ProductDetailId",
                table: "Images",
                column: "ProductDetailId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_ProductDetails_ProductDetailId",
                table: "Images",
                column: "ProductDetailId",
                principalTable: "ProductDetails",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
