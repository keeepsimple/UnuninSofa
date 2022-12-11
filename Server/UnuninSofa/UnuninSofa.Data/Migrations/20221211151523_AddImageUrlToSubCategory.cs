using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UnuninSofa.Data.Migrations
{
    public partial class AddImageUrlToSubCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "SubCategories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "def1fc9d-e9b9-4e8e-8213-441c0f30d5be");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "7ac08034-6bea-409c-886c-8538ea62dc06");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "adebd6ba-ed1e-4010-b305-18c5def3b7c1", "AQAAAAEAACcQAAAAEARXNIAN+DBIRDD0UsFXEt99OSNGWKBtgkzPzP7wUa4v2P95+0FR9KZeaE9/co3sbw==", "a4f64e5f-ffef-47bc-a037-6b15cf074928" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2033));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2044));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2045));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2047));

            migrationBuilder.UpdateData(
                table: "ImageCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2066));

            migrationBuilder.UpdateData(
                table: "ImageCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2067));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2089));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2090));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 22, 15, 23, 310, DateTimeKind.Local).AddTicks(2091));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "SubCategories");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "56016200-6e5a-41ae-83ba-a9759ac9e6b5",
                column: "ConcurrencyStamp",
                value: "057118ab-bbc0-4c8b-94c2-c3b143f845dc");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "99e62bd0-505e-4c7c-9533-3d0177220cec",
                column: "ConcurrencyStamp",
                value: "5a85f852-ae41-4419-a377-e0fbd1d976a2");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8967c0da-1606-447b-b91b-10c9f7e87418",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ae5ae4b3-b142-4cb5-af5d-8341dbea15cd", "AQAAAAEAACcQAAAAECiNEoFbM6PA4Q7sTNtMuBpPS6DTUO1ie0slMEvSQQHT6qbgOPBFETW2PFCksfraJQ==", "9d21da38-7cb2-42e2-b3b3-4a445ddae9aa" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5973));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5982));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5983));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5984));

            migrationBuilder.UpdateData(
                table: "ImageCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5998));

            migrationBuilder.UpdateData(
                table: "ImageCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(5999));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(6012));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(6013));

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreatedAt",
                value: new DateTime(2022, 12, 11, 15, 28, 53, 478, DateTimeKind.Local).AddTicks(6014));
        }
    }
}
